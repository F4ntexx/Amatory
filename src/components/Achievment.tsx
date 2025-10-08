function Achievment(props) {
  return (
    <div className="h-50 w-50">
      <img src={props.icon}></img>
      <p>{props.title}</p>
    </div>
  );
}

export default Achievment;
