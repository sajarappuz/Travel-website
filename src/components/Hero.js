import "./Hero.css";

function Hero(props) {
  return (
    <div>
      <div className={props.cName}>
        <img src={props.heroimg} alt="heroimage" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttontext}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
