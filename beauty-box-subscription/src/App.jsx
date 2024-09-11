import './App.css'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Pricing from './Pricing.jsx'


function App() {

  return (
    <>

      <NavBar/>
      <Hero/>
      <div className="container">
        <About/>
        <Pricing/>
      </div>
      

 
    </>
  )
}

export default App
