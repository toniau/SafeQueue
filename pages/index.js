import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Title = styled.h1`
  color: #339900;
`;

const Home = () => (
  <div className="container">
    <Head>
      <title>SafeQueue</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>
      <Title>
        Welcome to SafeQueue! 
      </Title>

      <div className="grid">
        <Link href="/admin">
          <a className="card">
            <h3>Admin Page &rarr;</h3>
          </a>
        </Link>
        <Link href="/user">
          <a className="card">
            <h3>User Page &rarr;</h3>
          </a>
        </Link>
      </div>
    </main>
    <Footer />

    {/* <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        margin-top: 3em;
        font-family: Helvetica Neue, Roboto, Oxygen, -apple-system, BlinkMacSystemFont, Segoe UI,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style> */}
  </div>
)

export default Home
