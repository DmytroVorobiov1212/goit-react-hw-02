import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [votingData, setVotingData] = useState(() => {
    const savedVoting = localStorage.getItem('voting');

    if (savedVoting !== null) {
      return JSON.parse(savedVoting);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = feedbackType => {
    setVotingData({
      ...votingData,
      [feedbackType]: votingData[feedbackType] + 1,
    });
  };

  const totalFeedback = Object.values(votingData).reduce(
    (sum, count) => sum + count,
    0
  );

  const positiveFeedback =
    totalFeedback > 0 && Math.round((votingData.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setVotingData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('voting', JSON.stringify(votingData));
  }, [votingData]);

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
