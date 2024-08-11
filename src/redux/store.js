import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./campers/slice";
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
import storage from "redux-persist/lib/storage";

const camperPersistConfig = {
  key: "camperSlice",
  storage,
  whitelist: ["favoritesItems"],
};

const persistedCamperReducer = persistReducer(
  camperPersistConfig,
  camperReducer
);

export const store = configureStore({
  reducer: {
    camper: persistedCamperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
