import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import { useState, useEffect } from "react";
import Notification from "../Notification/Notification";

const defVal = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = window.localStorage.getItem("feedback");
    return saveFeedback !== null ? JSON.parse(saveFeedback) : defVal;
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetClicks = () => {
    setFeedback(defVal);
  };

  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        reset={resetClicks}
        resetTotal={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
