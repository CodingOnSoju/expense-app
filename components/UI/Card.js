import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //so now anything we receive as a class
  //name from outside is added to that string.
  return <div className={classes}>{props.children}</div>;
  //we dynamically point const classes to line 4
  //check and note 10:25 - 10:30
};

export default Card;
