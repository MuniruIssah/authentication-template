
//AUTHENTICATION
import {client} from "./client";

export const register=(payload)=>client.post(payload)
export const login=(payload)=>client.post(payload)
export const forgotPassword=(payload)=>client.post(payload)
export const resetPassword=(payload)=>client.post(payload)