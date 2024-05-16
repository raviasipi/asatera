import { RootState, TypedDispatch } from "../../store"
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"

export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector