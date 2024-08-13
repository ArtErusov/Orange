import { useState } from 'react';
import styles from './styles.module.scss';

const SelectСategory = () => {
  const [activCatygory, setActivCatygory] = useState(1254);
  const categories = [
    { id: 1254, name: 'Все игры' },
    { id: 2214, name: 'Ps 5' },
    { id: 3457, name: 'Ps 4' },
    { id: 4312, name: 'Xbox' },
    { id: 5251, name: 'Switch' },
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
