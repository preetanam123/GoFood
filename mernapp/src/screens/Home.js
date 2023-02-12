import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <div className='container'>
        <Card />
        <Card />
        <Card />
        </div>
        <Footer />      
    </div>
  )
}

export default Home
