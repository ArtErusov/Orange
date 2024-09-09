import styles from './styles.module.scss';

const SelectСategory = ({categories, handleCatygory, activCatygory}) => {

  return (
      <ul className={styles.cat}>
        {categories.map((item) => (
          <li 
            className={item.id === activCatygory ? styles.cat_active : styles.cat_item} 
            onClick={() => handleCatygory(item.id)} 
            key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
  );
};

export default SelectСategory;
