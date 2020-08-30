import React from 'react'
import Head from 'next/head'

import Logo from '../assets/earth.svg'

const Home: React.FC = () => {
  return (
    <div className='app'>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Logo />
        <span>Brand</span>
      </nav>
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
