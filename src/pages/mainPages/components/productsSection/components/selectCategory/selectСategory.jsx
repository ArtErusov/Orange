import { useState } from 'react';
import styles from './styles.module.scss';

const SelectСategory = () => {
  const [activCatygory, setActivCatygory] = useState('idCat1254');
  const categories = [
    { id: 'idCat1254', name: 'Все игры' },
    { id: 'idCat2214', name: 'Ps 5' },
    { id: 'idCat3457', name: 'Ps 4' },
    { id: 'idCat4312', name: 'Xbox' },
    { id: 'idCat5251', name: 'Switch' },
  ];

  return (
    <>
      <ul className={styles.cat}>
        {categories.map((item) => (
          <li className={item.id === activCatygory ? styles.cat_active : styles.cat_item} onClick={() => setActivCatygory(item.id)} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SelectСategory;
