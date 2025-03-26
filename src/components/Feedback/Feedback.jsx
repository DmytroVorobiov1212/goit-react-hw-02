const Feedback = ({ voting, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul>
        <li>Good: {voting.good}</li>
        <li>Neutral: {voting.neutral}</li>
        <li>Bad: {voting.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </>
  );
};

export default Feedback;
