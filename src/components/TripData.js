import "./Trip.css";
import Trip from "./Trip";
function TripData(props) {
  return (
    <div className="trip-card">
      <div className="trip-image">
        <img src={props.image} alt="img" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default TripData;
