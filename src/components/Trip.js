import "./Trip.css";
import Tripdata from "./TripData";
import Trip1 from "../assets/malaysia.jpg";
import Trip2 from "../assets/london.jpg";
import Trip3 from "../assets/paris.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>discover new things</p>
      <div className="t-card">
        <Tripdata
          image={Trip1}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers."
        />
        <Tripdata
          image={Trip2}
          heading="Trip in London"
          text="London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
        />
        <Tripdata
          image={Trip3}
          heading="Trip in Paris"
          text="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
        />
      </div>
    </div>
  );
}
export default Trip;
