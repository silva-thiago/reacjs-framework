import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div className='app'>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Hello, World!</p>
      </main>

      <footer>
        <p>Proudly powered by {'Thiago Silva'}</p>
      </footer>
    </div>
  )
}

export default Home
