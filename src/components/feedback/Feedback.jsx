/* import App from "../App"; */


const Feedback = ({click, count, percent}) => {
  return (
    <div>
      <p>Good: {click.good}</p>
      <p>Neutral: {click.neutral}</p>
      <p>Bad: {click.bad}</p>
      <p>Total: {count}</p>
      <p>Positive: {percent} %</p> 
    </div>
  );
};

export default Feedback;
