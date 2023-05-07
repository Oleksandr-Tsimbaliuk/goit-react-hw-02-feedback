import React from 'react';

export const FeedbackOptions = ({
  onIncrementGoodBtn,
  onIncrementNeutralBtn,
  onIncrementBadBtn,
}) => {
  return (
    <div>
      <button type="button" onClick={onIncrementGoodBtn}>
        Good
      </button>
      <button type="button" onClick={onIncrementNeutralBtn}>
        Neutral
      </button>
      <button type="button" onClick={onIncrementBadBtn}>
        Bad
      </button>
    </div>
  );
};
