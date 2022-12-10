import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Serviceimg from "../assets/cafeteria.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={Serviceimg}
        title="SERVICE"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
