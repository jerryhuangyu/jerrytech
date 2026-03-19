import { useMessages } from "next-intl"
import type { AppMessages } from "./types"

export const useAppMessages = () => useMessages() as AppMessages
