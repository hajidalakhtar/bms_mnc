// configureStore.js

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import LoginProcess from './Login'


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, {
  reducer: {
    login: LoginProcess,
  },
  
})

export default function configureStore () {
  let store = createStore(persistedReducer);  
  let persistor = persistStore(store);
  
  return { persistor:persistor, store:store };
}
// export default function configureStore() {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }