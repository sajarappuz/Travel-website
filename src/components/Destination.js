import DestinationData from "./DestinationData";
import "./Destination.css";
import Bali1 from "../assets/ulun1.jpg";
import Bali2 from "../assets/ulun2.jpg";
import dubai1 from "../assets/palm1.jpg";
import dubai2 from "../assets/palm2.jpg";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Trips gives you Experiences</p>
      <DestinationData
        className="first-des"
        heading="ULUN DHAN, BALI"
        text="Set within the highlands of the mountainous Bedugul Regency in Bali, atop a plateau that sits on Lake Beratan, stands the majestic Ulun Danu Temple. In the mild, mountain weather, approximately 1,500 meters above sea level, the air is crisp and cool. The stunningly clear lake is calm and almost perfectly still, save for the soft breeze that occasionally sweeps across, creating tiny ripples upon its surface. A thin mist rises from the lake and hangs in the air, surrounding the temple, giving it a somewhat surreal appearance"
        img1={Bali1}
        img2={Bali2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="PALM JUMERIAH, DUBAI"
        text="The tree-shaped Palm Jumeirah island is known for glitzy hotels, posh apartment towers and upmarket global restaurants. Food trucks offering snacks like shawarma dot the Palm Jumeirah Boardwalk, popular for its views of the Dubai coastline and the sail-shaped Burj Al Arab hotel. Beach clubs with spas and infinity pools turn into boisterous nightclubs with live DJs in the evening."
        img1={dubai1}
        img2={dubai2}
      />
    </div>
  );
};
export default Destination;
