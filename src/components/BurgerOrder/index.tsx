import React from 'react';
import style from './burgerOrder.module.scss';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { selectBurgerById } from '../../redux/slices/menuSlice';
import {
  addToOrder,
  deleteOfOrder,
  removeOfOrder,
  selectOrderBurgerById,
} from '../../redux/slices/orderSlice';
import { burgerType, useAppDispatch } from '../../redux/store';

const BurgerOrder: React.FC<{ index: number }> = ({ index }) => {
  const [isAvailable, setIsAvailable] = React.useState(false);
  const dispatch = useAppDispatch();
  const currentBurger = useSelector(selectBurgerById(index)) as burgerType;
  const burger = useSelector(selectOrderBurgerById(index)) as burgerType;

  React.useLayoutEffect(() => {
    if (currentBurger?.status === 'unavailable') {
      setIsAvailable(false);
    } else {
      setIsAvailable(true);
    }
  }, [currentBurger]);
  if (burger === undefined) {
    return null;
  }

  if (!isAvailable) {
    return (
      <CSSTransition
        classNames={style.order}
        key={index}
        timeout={{ enter: 1500, exit: 1500 }}>
        <li
          key={index}
          className="unavailable">
          Извените, {burger.name} временно не доступен
        </li>
      </CSSTransition>
    );
  }
  return (
    <CSSTransition
      classNames={style.order}
      key={index}
      timeout={{ enter: 1500, exit: 1500 }}>
      <li key={index}>
        <button
          className={style.btn}
          onClick={() => dispatch(addToOrder(burger))}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"></path>
          </svg>
        </button>
        <span>{burger.count} шт.</span>
        <button
          className={style.btn}
          disabled={burger.count === 1}
          onClick={() => dispatch(deleteOfOrder(index))}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </button>
        <span>
          {burger.name}
          {(burger.count ? burger.count : 1) * burger.price} ₽
        </span>
        <button
          onClick={() => {
            dispatch(removeOfOrder(index));
          }}
          className={style.btn_cancel}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </button>
      </li>
    </CSSTransition>
  );
};

export default BurgerOrder;
