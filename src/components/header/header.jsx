import TopHeader from './components/topHeader/topHeader';
import styles from './styles.module.scss';


const Header = () => {
  return (
    <>
    <TopHeader />
      <div className={styles.container}>
        <div className={styles.test}>
        
        </div>
      </div>
    </>
  );
};

export default Header;