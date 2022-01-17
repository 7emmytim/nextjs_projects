import { Space } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/General/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Timilehin</title>
      </Head>
      <section className='container'>
        <Space size='large' direction='vertical'>
          <Link href='/quiz-page'>Quiz</Link>
          <Link href='/notepad'>Notepad</Link>
        </Space>
      </section>
    </Layout>
  )
}
