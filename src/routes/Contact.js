import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Contactimg from "../assets/peoples.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={Contactimg}
        title="CONTACT"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
