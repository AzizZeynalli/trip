import { destinations } from "../../../constants";
import "./DestinationsList.css";

const DestinationsList = () => {
  return (
    <section className="destionations-list">
      {Object.keys(destinations).map((destination) => {
        return (
          <div key={destination}>
            <h2>{destination}</h2>
            <ul>
              {destinations[destination].map((place) => {
                return (
                  <li key={place} className="destination">
                    {place}
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
