import './App.css';
import Carousel from './components/carousel';
import Contact from './components/contact';
import Counts from './components/counts';
import Destination from './components/destination';
import Header from './components/header';
import Services from './components/services';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Destination />
      <Counts />
      <Services />
      <Contact />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
