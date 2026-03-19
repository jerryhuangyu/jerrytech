# ADR 0001: Hero Matrix Background 與命令式 Canvas 繪製

- 狀態: Accepted
- 日期: 2026-03-15

## 背景

這次首頁 Hero 區塊有一組新的 staged 實作，主要包含以下調整：

- 在 [`src/sections/Hero.tsx`](../../src/sections/Hero.tsx) 導入新的 hero 版面與裝飾元素。
- 新增 [`src/components/HeroMatrixBackground.tsx`](../../src/components/HeroMatrixBackground.tsx)，在 Hero 背後提供 matrix rain 視覺效果。
- Hero 文案、tech tags、stats 改由 [`messages/en`](../../messages/en/index.ts) 與 [`messages/zh`](../../messages/zh/index.ts) 合併提供。

這個背景效果需要同時滿足幾個條件：

- 需要覆蓋整個 Hero 區塊，並隨 viewport resize 自動重算。
- 需要支援 light / dark 顏色切換。
- 需要提供可調整的密度參數，例如 `density={1.4}`。
- 不能讓每一幀動畫都拖慢 Hero 其餘內容與整個頁面的 React render。

## 決策

我們決定將 Hero 的 matrix rain 背景實作為「獨立的 client component + 命令式 canvas draw loop」：

- 背景元件只負責 canvas 動畫，不承擔 Hero 文案或版面資料組裝。
- 動畫更新透過 `requestAnimationFrame` 驅動 `drawFrame`，直接在 canvas context 上繪製。
- 密度以 `density` 數值 props 表達，內部透過 `columnGap` 與 `rowStep` 轉換成實際出現密度。
- Hero 本身仍維持宣告式 React 結構；只有需要逐幀更新的背景繪製採用命令式方式。

## 特別說明：`drawFrame` 刻意不使用常見的 React 寫法

這個實作**刻意不採用**常見的 React state-driven 方式，例如：

- 不用 `useState` 在每一幀保存所有字元位置。
- 不用每一幀 `setState` 觸發 component re-render。
- 不用把每個落下中的字元表示成 JSX 節點再交給 React diff。

改用命令式 `drawFrame` 的原因如下：

1. 這個效果本質上是高頻率、逐像素的畫布繪製，屬於 canvas side effect，不是適合交給 React reconciliation 的工作。
2. 如果每一幀都走 React render，會讓 Hero 區塊與其兄弟元件承受不必要的 re-render 成本，特別是在 60fps 附近會更明顯。
3. 目前需求只需要畫面結果，不需要每個字元的 React-level 狀態可追蹤性；把資料留在 canvas loop 內，結構更直接。
4. 使用 `requestAnimationFrame`、`resize` listener 與 canvas context，可以更自然地處理 viewport 尺寸、密度與 trail 效果。

簡單說，這裡選擇的是：

- Hero 文案與結構: React 的宣告式方式
- 背景逐幀繪製: imperative canvas 方式

這是一個刻意的邊界劃分，不是暫時性的權宜寫法。

## 方案細節

### Hero 結構

- [`src/sections/Hero.tsx`](../../src/sections/Hero.tsx) 保留 Hero 的主要版面組裝。
- Hero copy、tech tags、stats 等內容仍以 React component/private component 形式組合。
- 背景 matrix effect 被隔離在 [`src/components/HeroMatrixBackground.tsx`](../../src/components/HeroMatrixBackground.tsx)。

### 密度控制

- `density` 預設為 `1`。
- `density > 1` 代表更密；`density < 1` 代表更疏。
- 實作上不直接改字體大小，而是改：
  - `columnGap`
  - `rowStep`

這樣可以讓「字元大小」與「出現密度」不要完全綁死在同一個變數上。

### 主題與可近用性

- 顏色依照 `prefers-color-scheme` 自動調整。
- 若使用者偏好 reduced motion，背景不進入持續動畫迴圈。

## 替代方案

### 方案 A: 用 React state/JSX 表示每個掉落字元

不採用，原因：

- 每幀 render 成本高。
- DOM 節點數會快速膨脹。
- React diff 對這種畫布型動畫沒有明顯收益。

### 方案 B: 純 CSS keyframes

不採用，原因：

- 不容易表達目前這種隨機字元、trail、密度與 viewport 重算行為。
- 後續若要再加速度、密度或 theme 調整，CSS 會很快失控。

### 方案 C: 直接用 Three.js 做背景

不採用，原因：

- Hero 內已經有主要視覺資產；把背景也交給 3D renderer 會增加複雜度與資源競爭。
- 這個效果本質上是輕量 2D 畫布，不需要 3D 場景能力。

## 影響與後果

正面影響：

- 動畫與 Hero 其餘 React render 脫鉤，效能更穩定。
- 背景效果邏輯集中在單一元件，較容易單獨調整密度、顏色、節奏。
- 對 Hero 本身的 server/client 邊界影響較小。

代價：

- 命令式 canvas 程式碼需要自行管理 cleanup，例如 `cancelAnimationFrame` 與 `resize` listener。
- 視覺效果的測試較偏向手動驗證與瀏覽器觀察，而不是純 snapshot/assertion。
- 未來若要加入更複雜的互動，需要維持好 React 與 imperative canvas 的邊界。

## 後續維護原則

- 不要把 `drawFrame` 重構成每幀 `setState` 的 React 寫法，除非整個 rendering strategy 被重新設計。
- 背景效果的新參數優先以 props 或局部常數處理，不要把逐幀動畫狀態提升到全域 store。
- 若後續新增更多 Hero 動畫，應優先評估它是否真的需要 React 參與逐幀更新。
