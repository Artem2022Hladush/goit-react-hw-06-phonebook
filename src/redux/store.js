import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
 } from 'redux-persist'
import { contactReducer } from './contactSlice'
import {filterReducer} from './filterSlice'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

 
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['contact']
 }

const rootRedusers = combineReducers({
	contact: contactReducer,
	filter: filterReducer,
})

 const persistedReducer = persistReducer(persistConfig, rootRedusers)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
	 serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	 },
  }),
})

export const persistor = persistStore(store)