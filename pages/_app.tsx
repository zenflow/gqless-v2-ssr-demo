import "@exampledev/new.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import { AppProps } from "next/app";
import { PageLayout } from "../components/PageLayout";

const isNode = typeof window === "undefined";

if (!isNode) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", (url) => {
    console.log("routeChangeStart", url);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    console.log("routeChangeComplete");
    NProgress.done();
  });
  Router.events.on("routeChangeError", (error) => {
    console.log("routeChangeError", error);
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
