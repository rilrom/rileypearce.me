// Dependencies
import { AppProps } from "next/app";

// Styles
import "../styles/globals.css";

// Components
import Layout from "components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
