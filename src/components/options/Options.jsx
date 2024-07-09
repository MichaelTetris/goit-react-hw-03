import css from './options.module.css';

const Options = ({ updateClicks, onReset, hasData }) => {
  return (
    <div className={css.options}>
      <button onClick={() => updateClicks("good")}>Good</button>
      <button onClick={() => updateClicks("neutral")}>Neutral</button>
      <button onClick={() => updateClicks("bad")}>Bad</button>
      {hasData !== 0 && <button onClick={onReset}>Reset</button>}
      {/* {hasData && <button onClick={() => onReset()}>Reset</button>} */}
      {/* <button>Reset</button> */}

      {/* <ul className={css.options-btn}>
        <li><button onClick={() => updateClicks("good")}>Good</button></li>
        <li><button onClick={() => updateClicks("neutral")}>Neutral</button></li>
        <li><button onClick={() => updateClicks("bad")}>Bad</button></li>
        <li>{hasData !== 0 && <button onClick={onReset}>Reset</button>}</li>
      </ul> */}
    </div>
  );
};

export default Options;
