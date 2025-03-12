import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Footer from './components/Footer'
import Gallery from './pages/Gallery/Gallery'
import FeedbackForm from './components/FeedbackForm'
export default function App() {
  return (
    <>
      <Header/>
      <HomePage/>
      <About/>
      <Gallery/>
      <FeedbackForm/>
      <Footer/>

    </>
  )
}
