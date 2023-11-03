import "./Trending.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <img src={item.img} alt='' />
      <div className="card-content">
        <p>{item.country} trip</p>
        <h4>{item.title}</h4>
        <div className="card-bottom-container">
          <div>{item.days} days</div>
          <div>
            From <b>${item.price}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
