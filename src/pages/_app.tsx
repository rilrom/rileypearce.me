// Dependencies
import { NextUIProvider, theme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Types
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// Styles
import { lightTheme, darkTheme } from "styles/shared";
import { globalStyles } from "styles/globals";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {

  globalStyles();

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        {getLayout(<Component {...pageProps} />)}
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default MyApp;
