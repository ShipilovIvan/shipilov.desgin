
import styles from '../styles/UIVideo.module.sass'

const UIVideo = ({}) => { 
  return(
    <div>
        <a>   
            <video muted loop className={styles.UIVideo}>         
                <source src="..videos/juneo01.mp4" type="video/mp4"/>       
            </video> 
        </a>
    </div>
  );
}

export default UIVideo;