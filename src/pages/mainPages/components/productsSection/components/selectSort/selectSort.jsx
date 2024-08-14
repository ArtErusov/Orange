import { useState } from 'react';
import styles from './styles.module.scss';
import closeIcons from '/img/svg/closeIcons.svg';
import revealIcons from '/img/svg/revealIcons.svg';

const SelectSort = () => {
  const [listIsActive, setListIsActive] = useState(false);
  const [activSort, setActivSort] = useState('idSort1032');
  const sortList = [
    { id: 'idSort1032', name: 'Сначала популярные' },
    { id: 'idSort2678', name: 'Сначала дешевле' },
    { id: 'idSort3219', name: 'Сначала дороже' },
  ];

  const handlerSort = (itemId) => {
    setListIsActive(false);
    setActivSort(itemId);
  };

  return (
    <div>
      <div onClick={() => setListIsActive(!listIsActive)} className={styles.sort}>
        <div >{sortList.find((item) => item.id === activSort).name}</div>
        {listIsActive ? <img src={closeIcons} alt="" /> : <img src={revealIcons} alt="" />}
      </div>
      {listIsActive ? (
        <div className={styles.ul}>
          <ul>
            {sortList
              .filter((item) => item.id !== activSort)
              .map((item) => (
                <li onClick={() => handlerSort(item.id)} key={item.id}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SelectSort;
