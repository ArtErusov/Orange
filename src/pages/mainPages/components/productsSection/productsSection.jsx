import styles from './styles.module.scss';
import SelectСategory from './components/selectCategory/selectСategory';
import SelectSort from './components/selectSort/selectSort';

const ProductsSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <SelectСategory />
          <SelectSort />
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
