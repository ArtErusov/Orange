import styles from './styles.module.scss';


const TimerCard = ({data}) => {
  return ( 
    <div className={styles.cardContainer}>
        <div className={styles.left}>
            <p>Товар дня:</p>
            <img src={data.src} alt="" />
        </div>
        <div className={styles.right}></div>
    </div>
  );
};

export default TimerCard;