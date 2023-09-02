import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import dealsSlice from "./deals/dealsSlice";
import authSlice from "./auth/authSlice";
import appSlice from "./app/appSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  // whitelist: ['token'],
};

const appPersistConfig = {
  key: "app",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    app: persistReducer(appPersistConfig, appSlice),
    deals: dealsSlice,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
