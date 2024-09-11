import './App.css'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Pricing from './Pricing.jsx'
import Footer from './Footer.jsx'


function App() {

  return (
    <>

      <NavBar/>
      <Hero/>
      <div className="container">
        <About/>
        <Pricing/>
        <Footer/>
      </div>
      

 
    </>
  )
}

export default App
