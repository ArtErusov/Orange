import styles from './styles.module.scss';
import star from '/img/svg/starIcon.svg';
import favouritesIcon from '/img/svg/favouritesIcon.svg';

const MainCard = ({ data }) => {
    const percentages = data.price - (data.price / 100 * data.label);



    return (
        <div className={styles.card}>
            <img src={data.src} alt="" />
            {data.label ? (
                <div className={styles.card_label}>
                    <p>- {data.label}%</p>
                </div>
            ) : null
            }
            {data.label ? (
                <div className={styles.card_price}>
                    <p className={styles.card_price_end}>{percentages.toFixed(0)} ₽</p>
                    <div className={styles.card_price_old}>
                        <div></div>
                        <p>{data.price} ₽</p>
                    </div>
                </div>
            ) : (
                <div className={styles.card_price}>
                    <p className={styles.card_price_end}>{data.price} ₽</p>
                </div>
            )}
            <p className={styles.card_text}>{data.text}</p>
            <div className={styles.card_rating}>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <p>3687</p>
            </div>
            <div className={styles.card_botton}>
                <button>в корзину</button>
                <div><img src={favouritesIcon} alt="" /></div>
            </div>

        </div >
    );
};

export default MainCard;