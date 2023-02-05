import { atomWithStorage } from 'jotai/utils'

export const loggedInAtom=atomWithStorage("loggedIn",false)
export const roleAtom=atomWithStorage("admin","")