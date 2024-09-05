import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import SelectСategory from './components/selectCategory/selectСategory';
import SelectSort from './components/selectSort/selectSort';
// import data from '../../../../data.json';
import MainCard from '../../../../components/ui/card/mainCard/mainCard';

const ProductsSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items')
      .then((item) => item.json())
      .then((array) => {
        setItems(array);
      });
  }, [setItems]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <SelectСategory />
          <SelectSort />
        </div>
        <div className={styles.gridCont}>
          {items.map((item) => (
            <MainCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
