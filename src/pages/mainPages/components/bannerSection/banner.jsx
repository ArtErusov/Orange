import styles from './styles.module.scss';
import BannerPlaceholder from '/img/BannerPlaceholder.png';
import data from '../../../../data.json';
import TimerCard from '../../../../components/ui/card/timerCard/timerCard';


const Banner = () => {
  return (
    <>
    <div className={styles.container + " " + styles.banner}>
        <img className={styles.placeholder} src={BannerPlaceholder} alt="" />
        <div>
        <TimerCard data={data[6]}/>
        </div>
    </div>
    
    </>
  );
};

export default Banner;