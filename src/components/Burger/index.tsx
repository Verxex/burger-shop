import React from 'react';
import { useSelector } from 'react-redux';
import { selectBurgerById } from '../../redux/slices/menuSlice';
import { addToOrder } from '../../redux/slices/orderSlice';
import { burgerType, useAppDispatch } from '../../redux/store';
import style from './burger.module.scss';

const Burger: React.FC<{ index: number }> = ({ index }) => {
  const [isAvailable, setisAvailable] = React.useState(true);

  const currentBurger = useSelector(selectBurgerById(index)) as burgerType;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (currentBurger?.status === 'unavailable') {
      setisAvailable(false);
    }
  }, [currentBurger]);

  return (
    <li className={style.menuBurger}>
      <div className="image-container">
        <img
          src={currentBurger?.image}
          alt={currentBurger?.name}
        />
      </div>

      <div className="burger-details">
        <h3 className={style.burgerName}>
          {currentBurger?.name}
          <span className="price">{currentBurger?.price} ₽</span>
        </h3>
        <p>{currentBurger?.desc}</p>
        <button
          className={style.buttonOrder}
          disabled={!isAvailable}
          onClick={() => currentBurger && dispatch(addToOrder(currentBurger))}>
          {isAvailable ? 'Заказать' : 'Временно нет'}
        </button>
      </div>
    </li>
  );
};

export default Burger;
