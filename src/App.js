import './assets/style/def.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './secctions/Home/Home'
import About from './secctions/About/About'
import Products from './secctions/Products/Products'
import Services from './secctions/Services/Services'
import Contact from './secctions/Contact/Contact'
import Footer from './secctions/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
