import "./Cards.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <img src={item.photo} alt='' />
      <div className="card-content">
        <p className="country">{item.country} trip</p>
        <h4>{item.title}</h4>
        <div className="card-bottom-container">
          <div className="days">{item.days} days</div>
          <div className="price">
            From <span>${item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;