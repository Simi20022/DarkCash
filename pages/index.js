import Head from 'next/head'
import dynamic from 'next/dynamic'

const DarkCashDemo = dynamic(() => import('../components/DarkCashDemo'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>DarkCash</title>
      </Head>
      <main>
        <DarkCashDemo />
      </main>
    </>
  )
}