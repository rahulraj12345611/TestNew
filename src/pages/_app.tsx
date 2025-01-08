import CustomerReducer from "./api/actionreducer/reducer/Customer.reducer";
import CommonReducer from "./api/actionreducer/reducer/Common.reducer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { store } from "@/redux/store";
import Layout from "@/components/Layouts/Layout";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "../redux/dataSlice"
import { SSRProvider } from "@react-aria/ssr";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["divisonalChart"],
};

const rootReducer = combineReducers({
  CustomerReducer: CustomerReducer,
  CommonReducer: CommonReducer,
  data : dataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);


export default function App({ Component, pageProps }: AppProps) {
  return (
    // <SSRProvider>
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
              <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
      </>
    // </SSRProvider>

  );
}
