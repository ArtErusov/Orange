import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
// import data from '../../../../data.json';

import SelectСategory from './components/selectCategory/selectСategory';
import SelectSort from './components/selectSort/selectSort';
import MainCard from '../../../../components/ui/card/mainCard/mainCard';
import SceletonMainCard from '../../../../components/ui/sceleton/sceletonMainCard/sceletonMainCard';

const ProductsSection = () => {
 
  // =========logic for selectCategory=========
  const [activCatygory, setActivCatygory] = useState('idCat1254');
  const categories = [
    { id: 'idCat1254', name: 'Все игры' },
    { id: 'idCat2214', name: 'Ps 5' },
    { id: 'idCat3457', name: 'Ps 4' },
    { id: 'idCat4312', name: 'Xbox' },
    { id: 'idCat5251', name: 'Switch' },
  ];
  const handleCatygory = (id) => setActivCatygory(id);
   // =========logic for selectSort=========
   const [activSort, setActivSort] = useState('idSort1032');
   const sortList = [
    { id: 'idSort1032', name: 'Сначала популярные' },
    { id: 'idSort2678', name: 'Сначала дешевле' },
    { id: 'idSort3219', name: 'Сначала дороже' },
  ];
  const handlerSort = (id) => setActivSort(id);

  //=========Request for mocapiapi======= 
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
// ======================================
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <SelectСategory  activCatygory={activCatygory} categories={categories} handleCatygory={handleCatygory}/>
          <SelectSort sortList={sortList} activSort={activSort} handlerSort={handlerSort}/>
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
