function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="left">
        <img src={props.pic} alt="" />
      </div>
      <div className="right">
        <h2>{props.name}</h2>
        <h4>{props.designation}</h4>
      </div>
    </div>
  );
}

export default Card;
