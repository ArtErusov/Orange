import styles from './styles.module.scss';
import catalogIcon from '/img/svg/catalog.svg';

const Catalog = () => {

  return (
    <>
      <div className={styles.catalog}>
        <img src={catalogIcon} alt="" />
        <p>каталог</p>
      </div>
    </>
  );
};

export default Catalog;