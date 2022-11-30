'use client';

// Dependencies
import { PropsWithChildren } from "react";

// Components
import Header from "components/Header";

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
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
