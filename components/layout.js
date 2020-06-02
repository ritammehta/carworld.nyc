import Head from 'next/head'
import Link from 'next/link'


function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <h1><Link href='/home'><a>🚘🌎 carworld.nyc</a></Link></h1>
                <li><Link href='/'><a>Wiki</a></Link></li>
                <li><Link href='/'><a>Forum</a></Link></li>
                <buttom><Link href='/'><a>Login</a></Link></buttom>
            </header>
            {children}
        </div>
    );
}

export default Layout