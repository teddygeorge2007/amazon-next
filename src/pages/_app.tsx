import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import { persistor, store } from "@/store/store";
export default function App({ Component, 
  pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <SessionProvider session={session}>
          <div className="font-bodyFont bg-gray-300">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </SessionProvider>
      </Provider>
    </PersistGate>
  );
}
