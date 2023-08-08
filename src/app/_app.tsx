import App, {AppContext, AppProps} from "next/app";
import {CookiesProvider} from "react-cookie";

const MyCustomApp = ({Component, pageProps}: AppProps) => (
  <html>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  </html>
);

MyCustomApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);

  return {...ctx, example: "foo"};
};

export default MyCustomApp;