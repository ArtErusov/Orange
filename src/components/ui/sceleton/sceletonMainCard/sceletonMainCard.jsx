import styles from './styles.module.scss';


const SceletonMainCard = () => {


  return (
    <div className={styles.card}>
      <div className={styles.card_img}></div>
      <div className={styles.card_price}></div>
    
      <div className={styles.card_text}></div>
      <div className={styles.card_text}></div>
      <div className={styles.card_text}></div>
      
      <div className={styles.card_button}></div>
        

      
    </div>
  );
};

export default SceletonMainCard;
