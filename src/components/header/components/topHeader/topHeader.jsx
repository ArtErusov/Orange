import { useState } from 'react';
import styles from './styles.module.scss';
import closeIcons from '/img/svg/closeIcons.svg';
import revealIcons from '/img/svg/revealIcons.svg';


const TopHeader = () => {
  const [isActiveCity, setIsActiveCity] = useState('idCity1630');
  const [isActive, setIsActive] = useState(false);
  const cities = [
    { id: 'idCity1630', name: 'Москва' },
    { id: 'idCity2478', name: 'Тула' },
    { id: 'idCity3144', name: 'Рязань' },
    { id: 'idCity4908', name: 'Тверь' },
    { id: 'idCity5143', name: 'Муром' },
    { id: 'idCity6097', name: 'Владимир' },
    { id: 'idCity7747', name: 'Калуга' },
  ];

  return (
    <div className={styles.HeadCont}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.city}>
            <p>город:</p>
            <div onClick={() => setIsActive(!isActive)} className={styles.city_select}>
              <div>{cities.find((item) => item.id === isActiveCity).name}</div>
              {isActive ?
                (<img src={closeIcons} alt="" />)
                :
                (<img src={revealIcons} alt="" />)
              }
              {isActive ?
                (<ul className={styles.drop}>
                  {cities.filter((item) => item.id !== isActiveCity).map((item) =>(<li onClick={() => setIsActiveCity(item.id)} key={item.id}>{item.name}</li>))}
                </ul>) : null
              }
            </div>
          </div>
          <div>MSK</div>
        </div>

      </div>
    </div>

  );
};

export default TopHeader;