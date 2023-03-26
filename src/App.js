import About from './components/About';
import BestSeller from './components/BestSeller';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Subscribe from './components/Subscribe';
import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <BestSeller />
      <News />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
