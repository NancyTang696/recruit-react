import card from './credit-card-reducer'
import user from './user-reducer'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    card,
    user
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer