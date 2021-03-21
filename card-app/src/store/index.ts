import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import rootReducer, { RootState } from './reducers/root-reducer'


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['creditCardDetails/cardRegistered'],
          ignoredPaths: ['card.cardDetails.expiryDate', 'payload.expiryDate']
        }
      })
})

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector