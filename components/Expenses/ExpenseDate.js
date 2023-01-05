import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  //accept props as a parameter
  const month = props.date.toLocaleString("en-US", { month: "long" });
  //built.in methods - toLocaleString
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  //built.in methods - getFullYear

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      {/* point const month to the helper variable or a constant */}
      <div className="expense-date__year">{year}</div>
      {/* for styling - css classes - className="expense-date__year"  */}
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate; //make it reuseable outside of the file
