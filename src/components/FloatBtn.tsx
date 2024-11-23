"use client"

import { ProductOutlined } from "@ant-design/icons"
import { ConfigProvider, FloatButton } from "antd"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useState } from "react"

const _FloatBtn = () => {
	const [open, setOpen] = useState(false)
	const [primaryTooltip, setPrimaryTooltip] = useState("Open Menu")
	const router = useRouter()
	const isZh = window.location.pathname.startsWith("/zh")
	const isEn = window.location.pathname.startsWith("/en")

	const handleOnclick = () => {
		setOpen(pre => !pre)
		setPrimaryTooltip(`${open ? "Open" : "Close"} Menu`)
	}

	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#C785EC",
						colorFillContent: "#FFFFFF",
						colorBgElevated: "#F8EFFD",
					},
				}}
			>
				<FloatButton.Group
					type="primary"
					trigger="click"
					tooltip={primaryTooltip}
					open={open}
					onClick={handleOnclick}
					style={{ right: 24 }}
					icon={<ProductOutlined />}
				>
					{isEn && (
						<FloatButton
							tooltip="切換至中文"
							description="繁"
							style={{ fontWeight: "bold" }}
							onClick={() => router.replace("/zh")}
						/>
					)}
					{isZh && (
						<FloatButton
							tooltip="Select English"
							description="EN"
							style={{}}
							onClick={() => router.replace("/en")}
						/>
					)}
					<FloatButton.BackTop visibilityHeight={0} tooltip="Back to Top" />
				</FloatButton.Group>
			</ConfigProvider>
		</>
	)
}

const FloatBtn = dynamic(() => Promise.resolve(_FloatBtn), { ssr: false })
export default FloatBtn
