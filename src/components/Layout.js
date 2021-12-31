import Head from 'next/head'
import Header from 'components/Header'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Riley Pearce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto max-w-screen-lg px-4 mt-16" style={{maxWidth: '880px'}}>
        {children}
      </main>
    </>
  )
}