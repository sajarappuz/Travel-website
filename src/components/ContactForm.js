import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contform">
      <h1>Send a Message to us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
