import { configureStore } from "@reduxjs/toolkit";
import eStoreSlice from "../features/mySlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version:1,
  storage,
};
const reducer = combineReducers({
  name: eStoreSlice,
})
const persistedReducer  = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
});
