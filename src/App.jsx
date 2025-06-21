import About from "./Components/About"
import Contact from "./Components/Contact"
import Experience from "./Components/Experience"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Testimonials from "./Components/Testimonials"


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App