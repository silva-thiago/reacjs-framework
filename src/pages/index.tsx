import React from 'react'

import PageHead from '@/components/PageHead'

import { Greeting, Baseboard } from '@/styles/pages/Home'

import Logo from '../assets/earth.svg'

const Home: React.FC = () => {
  return (
    <div className='app'>
      <PageHead title='Home' />
      <nav>
        <div className='container'>
          <Logo />
          <span>Brand</span>
        </div>
      </nav>
      <header>
        <div className='container'>
          <p>Header</p>
        </div>
      </header>
      <main>
        <div className='container'>
          <Greeting>Hello, World!</Greeting>
        </div>
      </main>
      <footer>
        <Baseboard>
          <p>Proudly powered by {'Thiago Silva'}</p>
        </Baseboard>
      </footer>
    </div>
  )
}

export default Home
