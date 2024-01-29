import './Feedback.module.css';

export const Feedback = ({ options, updateFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => updateFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
