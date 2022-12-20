import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { removeOfOrder, selectOrderBurgerById } from '../redux/slices/orderSlice';
import { useAppDispatch } from '../redux/store';

const RenderOrder: React.FC<{ index: number }> = ({ index }) => {
  const dispatch = useAppDispatch();
  const burger = useSelector(selectOrderBurgerById(index));
  if (!burger) {
    return null;
  }

  const isAvailable = burger && burger.status === 'available';

  if (!isAvailable) {
    return (
      <CSSTransition
        classNames="order"
        key={index}
        timeout={{ enter: 500, exit: 500 }}>
        <li
          key={index}
          className="unavailable">
          Извените, {burger ? burger.name : 'burger'} временно не доступен
        </li>
      </CSSTransition>
    );
  }
  return (
    <CSSTransition
      classNames="order"
      key={index}
      timeout={{ enter: 500, exit: 500 }}>
      <li key={index}>
        <button>+</button>
        <span>{burger.count} шт.</span>
        <button>-</button>
        {burger.name}
        <span>{burger.count ? burger.count : 0 * burger.price} ₽</span>
        <button
          onClick={() => {
            dispatch(removeOfOrder(index));
          }}
          className="cancelItem">
          &times;
        </button>
      </li>
    </CSSTransition>
  );
};

export default RenderOrder;
