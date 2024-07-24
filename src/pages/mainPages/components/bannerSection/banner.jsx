import styles from './styles.module.scss';
import BannerPlaceholder from '/img/BannerPlaceholder.png'


const Banner = () => {
  return (
    <>
    <div className={styles.container}>
      {/* Временная заглушка */}
        <img className={styles.placeholder} src={BannerPlaceholder} alt="" />
    </div>
    
    </>
  );
};

export default Banner;