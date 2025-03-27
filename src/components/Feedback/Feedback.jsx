import s from './Feedback.module.css';

const Feedback = ({ voting, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.container}>
      <ul className={s.section}>
        <li>Good: {voting.good}</li>
        <li>Neutral: {voting.neutral}</li>
        <li>Bad: {voting.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
