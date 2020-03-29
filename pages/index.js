import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Title = styled.h1`
  color: #339900;
  text-align: center;
`

const Home = () => (
  <div className="container">
    <Head>
      <title>SafeQueue</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>
      <Title>
        SafeQueue
      </Title>

      <div>
        <Link href="/admin">
          <a>
            <h3>Admin Page &rarr;</h3>
          </a>
        </Link>
        <Link href="/user">
          <a>
            <h3>User Page &rarr;</h3>
          </a>
        </Link>
      </div>
    </main>
    <Footer />
  </div>
)

export default Home
