import styles from './styles.module.scss';


const TimerCard = ({ data }) => {

    const percentages = data.price - (data.price / 100 * data.label);



    return (
        <div className={styles.cardContainer}>
            <div className={styles.left}>
                <p>Товар дня:</p>
                <img src={data.src} alt="" />
            </div>
            <div className={styles.right}>
                <div className={styles.right_timer}>
                    <p className={styles.right_timer_box}>11</p>
                    <p className={styles.right_timer_separator}>:</p>
                    <p className={styles.right_timer_box}>42</p>
                    <p className={styles.right_timer_separator}>:</p>
                    <p className={styles.right_timer_box}>59</p>
                </div>
                {data.label ? (
                    <div className={styles.right_label}>
                        <div className={styles.right_label_gray}>
                            <p>Скидка:</p>
                        </div>
                        <div className={styles.right_label_red}>
                            <p>- {data.label}%</p>
                        </div>
                    </div>
                ) : null}
                {data.label ? (
                    <div className={styles.right_price}>
                        <p className={styles.right_price_end}>{percentages.toFixed(0)} ₽</p>
                        <div className={styles.right_price_old}>
                            <div></div>
                            <p>{data.price} ₽</p>
                        </div>
                    </div>
                ) : (
                    <div className={styles.right_price}>
                        <p className={styles.right_price_end}>{data.price} ₽</p>
                    </div>
                )}
                <p className={styles.right_text}>{data.text}</p>
                <button className={styles.right_btn}>в корзину</button>


            </div>
        </div>
    );
};

export default TimerCard;