
const Card = (props) => {
  return (
    <div className="card mb-3" style={{padding:'10px', maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.imgsrc}
            className="img-fluid rounded-start"
            alt={props.imgsrc}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
