import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Footer from './components/footer'
import Gallery from './pages/Gallery/Gallery'
import FeedbackForm from './components/FeedbackForm'
export default function App() {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
      <About></About>
      <Gallery></Gallery>
      <FeedbackForm></FeedbackForm>
      <Footer></Footer>

    </>
  )
}
