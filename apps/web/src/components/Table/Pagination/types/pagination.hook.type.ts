import { IPaginationComponentType } from "."

export type IPaginationHookProps = IPaginationComponentType
export type IPaginationHookType<T> = (props: T) => void
