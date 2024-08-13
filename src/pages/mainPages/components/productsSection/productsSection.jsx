import styles from './styles.module.scss';
import SelectСategory from './components/selectСategory';


const ProductsSection = () => {
  return (
    <>
    <div className={styles.container}>
    <div>
        <SelectСategory />

    </div>
    </div>
    </>
  );
};

export default ProductsSection;