import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import UserContext from "../components/UserContext";
import { useRef } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <>
      <Meta title="Selah Earth Foundation" />

      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <UserContext.Provider value={{ scrollRef: scrollRef }}>
            {pid === "/login" ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </UserContext.Provider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
