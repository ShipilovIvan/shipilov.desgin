import styles from '../styles/Button.module.sass'

const Button = ({ type = 'button', onClick, children, disabled, className }) => {
  const handleClick = () => {
    // implementation details
  };

    return (
        <div >
          <button
            className={styles.mainButton}
            type={type} 
            onClick={onClick}
            disabled={disabled}>
          {children}</button>
        </div>
    );
  }

export default Button;