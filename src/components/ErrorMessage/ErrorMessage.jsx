import css from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => {
  return <div className={css.error}>{error}</div>;
};

export default ErrorMessage;
