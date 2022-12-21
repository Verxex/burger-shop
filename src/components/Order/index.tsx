import React from 'react';
import Shipment from '../shipment';
import { TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import BurgerOrder from '../BurgerOrder';
import { selectOrder } from '../../redux/slices/orderSlice';
import style from './order.module.scss';

export default function Order() {
  const { burgers, totalCoast } = useSelector(selectOrder);

  return (
    <div className="order-wrap">
      <h2>Ваш заказ</h2>
      <TransitionGroup
        component="ul"
        className={style.order}>
        {burgers.map((obj) => (
          <BurgerOrder
            key={obj.id}
            index={obj.id !== undefined ? obj.id : 0}
          />
        ))}
      </TransitionGroup>

      {totalCoast > 0 ? (
        <Shipment />
      ) : (
        <div className="NothingSelected">Выберете блюда и добавьте в заказ</div>
      )}
    </div>
  );
}
