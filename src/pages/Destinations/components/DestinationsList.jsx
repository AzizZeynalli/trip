import { destinations } from "../../../constants";
import "./DestinationsList.css";
import { Link } from "react-router-dom";

const DestinationsList = () => {
  return (
    <section className="destionations-list" id="destinations-list">
      {Object.keys(destinations).map((destination) => {
        return (
          <div key={destination}>
            <h2>{destination}</h2>
            <ul>
              {destinations[destination].map((place) => {
                return (
                  <li key={place} className="destination">
                    <Link to={place}>{place}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default DestinationsList;
