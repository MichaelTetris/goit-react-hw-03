/* import React from 'react'; */

import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Notification from "./notification/Notification";
import Options from "./options/Options";

import css from "./app.module.css";

import { useState, useEffect } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((clicks.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    const storedClicks = localStorage.getItem("clicks");
    if (storedClicks) {
      setClicks(JSON.parse(storedClicks));
    }
  }, []);

  useEffect(() => {
    if (totalFeedback === 0) {
      localStorage.removeItem("clicks");
    } else {
      localStorage.setItem("clicks", JSON.stringify(clicks));
    }
  }, [clicks]);

  const updateClicks = (type) => {
    const newClicks = { ...clicks, [type]: clicks[type] + 1 };
    setClicks(newClicks);
  };

  const resetClicks = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateClicks={updateClicks}
        click={clicks}
        onReset={resetClicks}
        hasData={totalFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          click={clicks}
          count={totalFeedback}
          percent={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
