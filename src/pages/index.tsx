import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1>React JS Structure</h1>
      <p>A React + Next + Styled Components structure.</p>
    </Container>
  )
}

export default Home
