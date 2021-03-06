// Dependencies
import { PropsWithChildren } from "react";
import Head from "next/head";

// Components
import Header from "components/Header";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Head>
        <title>Riley Pearce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className="container mx-auto max-w-screen-lg px-4 mt-16"
        style={{ maxWidth: "720px" }}
      >
        {children}
      </main>
    </>
  );
}
