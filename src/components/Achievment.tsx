function Achievment(props:any) {
  return (
    <div className="h-50 w-50">
      <img src={props.icon} loading="lazy"></img>
      <p>{props.title}</p>
    </div>
  );
}

export default Achievment;
