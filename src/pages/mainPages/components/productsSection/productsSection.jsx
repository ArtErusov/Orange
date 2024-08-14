import styles from './styles.module.scss';
import SelectСategory from './components/selectCategory/selectСategory';
import SelectSort from './components/selectSort/selectSort';
import data from '../../../../data.json';
import MainCard from '../../../../components/ui/card/mainCard/mainCard';

const ProductsSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <SelectСategory />
          <SelectSort />
        </div>
        <div className={styles.gridCont}>
          {data.map((item) => (
            <MainCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
