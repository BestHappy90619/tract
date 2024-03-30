import { stringToBool } from "@/utils/Functions";

// import env
export const DEBUG_MODE = stringToBool(import.meta.env.VITE_DEBUG_MODE);
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const MSG_BY_USER = "msg_by_user";
export const MSG_BY_BOT = "msg_by_bot";