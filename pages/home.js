import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>CAR WORLD Homepage</title>
            </Head>
            <h1>Welcome to Car World</h1>
            <h2>Join us. We'll take you across the Bridge To Car World, if you become an apostle. You need Devotion to become an apostle.</h2>
        </Layout>
    )
}