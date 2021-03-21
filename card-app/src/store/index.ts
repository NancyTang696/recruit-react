import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import reducer, { RootState } from './reducers/root-reducer'

export const middleware = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: ['creditCardDetails/cardRegistered'],
      ignoredPaths: ['card.cardDetails.expiryDate', 'payload.expiryDate']
    }
  })

const store = configureStore({
    reducer,
    middleware
})

export type AppDispatch = typeof store.dispatch

export default store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
