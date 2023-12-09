import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentAccount: {
        id:1,
        fullname:"Ömer",
        username:"scalperOmer",
        avatar:"https://pbs.twimg.com/profile_images/1516084427557945358/IeY7soqo_400x400.jpg",
    },
    accounts: []
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    },
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer