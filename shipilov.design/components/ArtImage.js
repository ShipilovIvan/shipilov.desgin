import styles from '../styles/3DImage.module.sass'
import Image from 'next/image'

const ArtImage = ({art, alt}) => { 
  return(
    <div className={styles.ArtImage}>
      <a>              
        <Image 
              src={art}
              alt={alt}
      /></a>
    </div>
  );
}

export default ArtImage;