import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/todoSlick.js';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};

const reducer = combineReducers({
  todos: rootReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);
export default store;