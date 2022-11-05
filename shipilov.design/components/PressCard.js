import styles from '../styles/PressCard.module.sass'
import Image from 'next/image'

const PressCard = ({logo, alt}) => { 
  return(
    <div className={styles.pressCard}>
      <a>              
        <Image 
              src={logo}
              alt={alt}
              width={180}
              height={180}
      /></a>
    </div>
  );
}

export default PressCard;