import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { deleteBurger, selectBurgerById, updateBurger } from '../../redux/slices/menuSlice';
import { burgerType, useAppDispatch } from '../../redux/store';
import style from './EditBurgerComponent.module.scss';

const EditBurgerForm: React.FC<{ index: number }> = ({ index }) => {
  const CurrentBurger = useSelector(selectBurgerById(index)) as burgerType;
  const dispatch = useAppDispatch();
  if (!CurrentBurger) {
    return null;
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    dispatch(
      updateBurger({
        ...CurrentBurger,
        [event.target.name]: event.currentTarget.value,
      }),
    );
  };

  const onClickDelete = () => {
    if (CurrentBurger.id !== undefined) {
      dispatch(deleteBurger(CurrentBurger.id));
    }
  };

  return (
    <div className={style.root}>
      <input
        onChange={handleChange}
        name="name"
        value={CurrentBurger.name}
      />
      <input
        onChange={handleChange}
        name="price"
        type="number"
        value={CurrentBurger.price}
      />
      <select
        onChange={handleChange}
        name="status"
        className={style.status}
        value={CurrentBurger.status}>
        <option value="available">Доступно</option>
        <option value="unavailable">Убрать из меню</option>
      </select>
      <textarea
        onChange={handleChange}
        name="desc"
        value={CurrentBurger.desc}
      />
      <input
        onChange={handleChange}
        name="image"
        value={CurrentBurger.image}
      />
      <button onClick={onClickDelete}>Удалить из меню </button>
    </div>
  );
};

export default EditBurgerForm;
