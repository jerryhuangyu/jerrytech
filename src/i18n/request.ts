import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

const messageLoaders = {
	zh: () => import("../../messages/zh"),
	en: () => import("../../messages/en"),
} as const

type SupportedLocale = keyof typeof messageLoaders

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale

	// Ensure that the incoming locale is valid
	// biome-ignore lint/suspicious/noExplicitAny: <check incoming locale>
	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale
	}

	const resolvedLocale = locale as SupportedLocale

	return {
		locale: resolvedLocale,
		messages: (await messageLoaders[resolvedLocale]()).default,
	}
})
