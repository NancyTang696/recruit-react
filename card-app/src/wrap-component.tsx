import { configureStore, Store } from '@reduxjs/toolkit'
import React, { ComponentType, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { middleware } from './store'
import reducer from './store/reducers/root-reducer'

export const makeStore = (): Store => {
    return configureStore({ reducer, middleware })
}

const wrapComponent = (Component: ComponentType, store: Store | null = null, props = {}): ReactElement => {
    return (
      <Provider store={store || makeStore()}>
          <Component {...props} />
      </Provider>
    )
  }
  
  export default wrapComponent