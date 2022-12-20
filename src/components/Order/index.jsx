import React from 'react';
import Shipment from '../shipment';
import { TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import RenderOrder from '../RenderOrder';

export default function Order() {
  const burgers = useSelector((state) => state.order.burgers);
  const totalCoast = useSelector((state) => state.order.totalCoast);

  return (
    <div className="order-wrap">
      <h2>Ваш заказ</h2>
      <TransitionGroup
        component="ul"
        className="order">
        {burgers.map((obj) => (
          <RenderOrder
            key={obj.id}
            index={obj.id}
          />
        ))}
      </TransitionGroup>

      {totalCoast > 0 ? (
        <Shipment total={totalCoast} />
      ) : (
        <div className="NothingSelected">Выберете блюда и добавьте в заказ</div>
      )}
    </div>
  );
}
