import { getMessages } from "next-intl/server"
import type { AppMessages } from "./types"

export const getAppMessages = async () => (await getMessages()) as AppMessages
