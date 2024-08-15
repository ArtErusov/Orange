import styles from './styles.module.scss';

import TopHeader from './components/topHeader/topHeader';
import Catalog from './components/catalog/catalog';

import logoHeader from '/img/svg/logoHeader.svg';
import searchIcon from '/img/svg/searchIcon.svg';
import favouritesIconGray from '/img/svg/favouritesIconGray.svg';
import basketIcon from '/img/svg/basketIcon.svg';

const Header = () => {
  return (
    <>
      <TopHeader />
      <div className={styles.container + " " + styles.header}>
        <img className={styles.header_logo} src={logoHeader} alt="" />
        <div className={styles.header_catalog}>
          <Catalog />
        </div>
        <div  className={styles.position}>
          <input className={styles.header_search} type="text" placeholder='Найти товар' />
          <div className={styles.header_search_icon}><img src={searchIcon} alt="" /></div>
        </div>
        <div className={styles.header_choice}>
          <div className={styles.header_choice_favorites}>
            <img src={favouritesIconGray} alt="" />
            <p>избранное</p>
          </div>
          <div className={styles.header_choice_basket}>
          <img src={basketIcon} alt="" />
            <p>корзина</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;