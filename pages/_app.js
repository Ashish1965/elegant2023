import Layout from '@/components/Layout';
import '@/styles/globals.css';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return <>
    <Head><title>Elegant</title></Head>
    <Layout>
    <NextNProgress color='white'/>
    <Component {...pageProps} />
  </Layout>
  </>
  
}
