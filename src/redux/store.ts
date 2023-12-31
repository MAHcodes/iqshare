import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./features/user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
});

export const PERSIST_CONFIG_KEY = "IQShareReduxState";

const persistConfig = {
  key: PERSIST_CONFIG_KEY,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistReducer;

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
