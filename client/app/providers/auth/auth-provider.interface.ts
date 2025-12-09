import { IUser } from "@/types/user.interface"
import { SetStateAction, Dispatch } from "react"

export type TypeUserState = IUser | null

export interface IContext {
  user: TypeUserState
  setUser: Dispatch<SetStateAction<TypeUserState>>
}