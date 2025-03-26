import { useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [votingData, setVotingData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    const stringType = feedbackType.target.textContent;
    setVotingData({
      ...votingData,
      [stringType]: votingData[stringType] + 1,
    });
  };

  const totalFeedback = Object.values(votingData).reduce(
    (sum, count) => sum + count,
    0
  );

  const positiveFeedback =
    totalFeedback > 0 &&
    Math.round(((votingData.good + votingData.neutral) / totalFeedback) * 100);

  const resetFeedback = () => {
    setVotingData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        btnFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          voting={votingData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
