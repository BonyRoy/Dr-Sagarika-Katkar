import '../components/Card.css'
const Card = (props) => {
  return (
    <div className="custom-card mb-4">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="custom-card-img">
            <img src={props.imgsrc} className="img-fluid" alt={props.title} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="custom-card-body">
            <h5 className="custom-card-title">{props.title}</h5>
            <p className="custom-card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


