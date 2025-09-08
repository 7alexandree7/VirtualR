import Features from './Components/Features/Features'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Price from './Components/Price/Price'
import Workflow from './Components/Workflow/Workflow'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <NavBar />
      <div className='container mx-auto pt-20 px-4'>
        <Hero />
        <Features />
        <Workflow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
