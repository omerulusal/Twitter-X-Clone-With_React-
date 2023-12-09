import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        _setModal: (state, action) => {
            state.modal = action.payload
        },
        _removeModal: state => {
            state.modal = false
        },
    },
})

export const { _setModal, _removeModal } = modalSlice.actions
export default modalSlice.reducer