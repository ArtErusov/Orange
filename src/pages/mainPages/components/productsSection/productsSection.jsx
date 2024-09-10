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
    { id: 'idCat1254', name: 'Все игры' , sortProperty: '' },
    { id: 'idCat2214', name: 'Ps 5' , sortProperty: '' },
    { id: 'idCat3457', name: 'Ps 4' , sortProperty: '' },
    { id: 'idCat4312', name: 'Xbox' , sortProperty: '' },
    { id: 'idCat5251', name: 'Switch' , sortProperty: '' },
  ];
  const handleCatygory = (id) =>setActivCatygory(id);
   // =========logic for selectSort=========
   const [activSort, setActivSort] = useState('idSort1032');
   const sortList = [
    { id: 'idSort1032', name: 'Сначала популярные' , sortProperty: 'review', sort: 'desc' },
    { id: 'idSort2678', name: 'Сначала дешевле' , sortProperty: 'price', sort: 'asc' },
    { id: 'idSort3219', name: 'Высокий рейтинг' , sortProperty: 'rating', sort: 'desc' },
    { id: 'idSort4678', name: 'Низкий рейтинг' , sortProperty: 'rating', sort: 'asc' },
    { id: 'idSort5678', name: 'Колличество отзывов' , sortProperty: 'review', sort: 'desc' },
    { id: 'idSort6567', name: 'Величина скидки' , sortProperty: 'label', sort: 'desc' },
  ];
  const handlerSort = (id) =>setActivSort(id);
  const sortListProperty = sortList.find((item) => item.id === activSort).sortProperty;
  const sortListVolume = sortList.find((item) => item.id === activSort).sort;

  //=========Request for mocapiapi======= 
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://65523e2c5c69a7790329c0eb.mockapi.io/items?&sortBy=${sortListProperty}&order=${sortListVolume}`)
      .then((item) => item.json())
      .then((array) => {
        setItems(array);
        setIsLoading(false)
      });
  }, [setItems, setActivCatygory, setActivSort, sortListProperty]);
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
          ? [... new Array(12)].map((_, index) => <SceletonMainCard key={index}/> )
          : items.map((item) => <MainCard key={item.id} data={item} /> )
          }
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
