"use client"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { useEffect } from "react"

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return
		posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
			api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
			person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
		})
	}, [])

	return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
