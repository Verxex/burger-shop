import React from 'react';
import { useSelector } from 'react-redux';
import AddBurgersForm from './AddBurgerForm';
import EditBurgersForm from './EditBurgerForm';
import { addBurger, selectBurgers } from '../redux/slices/menuSlice';
import { burgerType, useAppDispatch } from '../redux/store';
import sampleBurgers from '../sample-burgers.json';

const MenuAdmin: React.FC = () => {
  const burgers = useSelector(selectBurgers);
  const dispatch = useAppDispatch();

  const loadSampleBurgers = () => {
    sampleBurgers.map((obj, i) => dispatch(addBurger({ ...(obj as burgerType), id: i })));
  };

  return (
    <div className="menu-admin">
      <h2>Управление меню</h2>
      {burgers.map((obj) => {
        return (
          <EditBurgersForm
            key={obj.id}
            index={obj.id ? obj.id : 0}
          />
        );
      })}
      <AddBurgersForm />
      <button onClick={loadSampleBurgers}>загрузить бургеры</button>
    </div>
  );
};

export default MenuAdmin;
