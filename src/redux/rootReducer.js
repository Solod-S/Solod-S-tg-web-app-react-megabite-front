import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
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

// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authSlice),
//   app: persistReducer(appPersistConfig, appSlice),
//   deals: dealsSlice,
// });

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistedAppReducer = persistReducer(appPersistConfig, appSlice);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  app: persistedAppReducer,
  deals: dealsSlice,
});

export default rootReducer;
