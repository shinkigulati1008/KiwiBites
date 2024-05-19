import './Home.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';

function Home() {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <Features/> 
      <About/>     
      <Footer/>
    </div>
  );
}

export default Home;
