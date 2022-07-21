import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/css/styles.css';

export default function App() {
  return (
    <div className="app">
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}


