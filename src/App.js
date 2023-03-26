import About from './components/About';
import BestSeller from './components/BestSeller';
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
    </>
  );
}

export default App;
