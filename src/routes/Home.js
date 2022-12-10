import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import Homeimg from "../assets/road.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={Homeimg}
        title="Travel More Explore More"
        text="choose your destination"
        buttontext="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
