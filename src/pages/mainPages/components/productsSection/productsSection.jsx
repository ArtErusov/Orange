import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
// import data from '../../../../data.json';

import SelectСategory from './components/selectCategory/selectСategory';
import SelectSort from './components/selectSort/selectSort';
import MainCard from '../../../../components/ui/card/mainCard/mainCard';
import SceletonMainCard from '../../../../components/ui/sceleton/sceletonMainCard/sceletonMainCard';

const ProductsSection = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/items')
      .then((item) => item.json())
      .then((array) => {
        setItems(array);
        setIsLoading(false)
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
          {isLoading 
          ? [... new Array(8)].map((_, index) => <SceletonMainCard key={index}/> )
          : items.map((item) => <MainCard key={item.id} data={item} /> )
          }
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
