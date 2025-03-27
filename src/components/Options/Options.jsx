import clsx from 'clsx';
import s from './Options.module.css';

const Options = ({ btnFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.container}>
      <div className={clsx(s.section, s.btnFlex)}>
        <button className={s.btn} onClick={btnFeedback}>
          good
        </button>
        <button className={s.btn} onClick={btnFeedback}>
          neutral
        </button>
        <button className={s.btn} onClick={btnFeedback}>
          bad
        </button>
        {totalFeedback > 0 && (
          <button className={s.btn} onClick={resetFeedback}>
            reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Options;
