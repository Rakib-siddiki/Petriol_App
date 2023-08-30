import "./App.css";
import ConnectWith from "./components/ConnectWith/ConnectWith";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Card from "./components/card/Card";
import Copmpany from "./components/companyDetails/Copmpany";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallary/Garllary";
import Header from "./components/header/Header";
import Map from "./components/map/Map";
import Navbar from "./components/navbar/Navbar";
import Offer from "./components/offer/Offer";
import Service from "./components/service/Service";
import Suplier from "./components/suplier/Suplier";

const App = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <Banner/>
      <Suplier/>
      <Gallery/>
      <Service/>
      <Copmpany/>
      <ConnectWith/>
      <Card/>
      <Map/>
      <Offer/>
      <About/>
      <Footer/>

    </>
  );
};

export default App;
