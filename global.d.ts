// Use type safe message keys with `next-intl`
type Messages = typeof import("./messages/en").default;
declare interface IntlMessages extends Messages {}
