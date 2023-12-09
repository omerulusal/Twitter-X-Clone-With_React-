import { useSelector } from "react-redux"

export const useGorunum = () => useSelector(state => state.gorunum)
// store icerisindeki gorunum: appearance tır (appearance ise gorunumSlice reducerıdır.)