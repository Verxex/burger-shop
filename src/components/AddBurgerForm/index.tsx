import React, { useRef } from 'react';
import style from './AddBurgerForm.module.scss';
import { useSelector } from 'react-redux';
import { addBurger } from '../../redux/slices/menuSlice';
import { burgerType, RootState, useAppDispatch } from '../../redux/store';

const AddBurgersForm: React.FC = () => {
  const lengthBurgers = useSelector((state: RootState) => state.menu.burgers.length);
  const dispatch = useAppDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const createBurger = () => {
    const burger: burgerType = {
      name: nameRef.current?.value || '',
      price: Number(priceRef.current?.value || 0) || 0,
      status: statusRef.current?.value === 'available' ? 'available' : 'unavailable',
      desc: descRef.current?.value || '',
      image: imageRef.current?.value || '',
      id: lengthBurgers,
    };
    console.log(burger);

    dispatch(addBurger(burger));
    //event.currentTarget.reset();
  };

  return (
    <div className={style.root}>
      <input
        ref={nameRef}
        placeholder="Name"
        autoComplete="off"
      />
      <input
        ref={priceRef}
        placeholder="Price"
        autoComplete="off"
      />
      <select
        ref={statusRef}
        className={style.status}>
        <option value="availible">Доступно</option>
        <option value="unavailible">Убрать из меню</option>
      </select>
      <textarea
        ref={descRef}
        placeholder="desc"
      />
      <input
        ref={imageRef}
        placeholder="Image"
        autoComplete="off"
      />
      <button onClick={createBurger}>+ Добавить в меню</button>
    </div>
  );
};
export default AddBurgersForm;
