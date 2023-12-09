import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    backgroundColor: {
        name:"dark",
        primary: "#000",
        secondary: "#16181c",
        third: "#273340",

    },
    color: {
        primary: "#1d9bf0",
        secondary: "#8ecdf8",
        base:"#e7e9ea"
    },
    fontSize: 16,
}

export const gorunumSlice = createSlice({
    name: 'appearance',
    initialState,
    reducers: {
        _setbackground: (state, action) => {
            state.backgroundColor = action.payload
        },
        _setColor: (state, action) => {
            state.color = action.payload
        },

        _setFontSize: (state, action) => {
            state.fontSize = action.payload
        },
    },
})

export const { _setbackground, _setColor, _setFontSize } = gorunumSlice.actions
export default gorunumSlice.reducer