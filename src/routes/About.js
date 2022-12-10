import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Aboutimg from "../assets/balloon.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroimg={Aboutimg} title="ABOUT" btnClass="hide" />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
