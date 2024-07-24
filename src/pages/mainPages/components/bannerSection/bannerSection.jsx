import styles from './styles.module.scss';
import Banner from './banner';


const BannerSection = () => {
  return (
    <>
    <div className={styles.banner_section}>
    <Banner></Banner>
    </div>
    </>
  );
};

export default BannerSection;