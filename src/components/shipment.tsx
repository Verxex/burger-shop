import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrder } from '../redux/slices/orderSlice';

const Shipment: React.FC = () => {
  const { totalCoast } = useSelector(selectOrder);
  const shipping = totalCoast > 0 && totalCoast < 500 ? 350 : 99;
  const shippingNeon =
    shipping === 99 ? (
      <span className="font-effect-neon total_wrap-chap">{shipping} ₽</span>
    ) : (
      <span>{shipping} ₽</span>
    );

  return (
    <div className="total">
      <div className="total_wrap">
        <div>
          <div> Доставка: {totalCoast > 0 ? shippingNeon : null}</div>
          <div className="total_wrap-free">
            {totalCoast < 500 ? `Закажите еще на ${500 - totalCoast} ₽ доставки за 99 ₽ ` : null}
          </div>
        </div>
        <div className="total_wrap-final">
          Итого: <span>{totalCoast}</span> ₽
        </div>
      </div>
    </div>
  );
};

export default Shipment;
