import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectBurgers } from '../redux/slices/menuSlice';

const App: React.FC = () => {
  const burgers = useSelector(selectBurgers);
  const dispatch = useAppDispatch();

  const componentDidUpdate = () => {
    // const { params } = props.match;
    // localStorage.setItem(params.restaurantId, JSON.stringify(state.order));
  };

  const componentWillUnmount = () => {
    //чистка сокетов при уходе со страницы
    //base.removeBinding(this.ref);
  };

  return (
    <div className="burger-paradise">
      <div className="menu">
        <Header title="Hot burgers" />
        <ul className="burgers">
          {burgers.map((obj) => {
            if (!obj) {
              return null;
            }
            return (
              <Burger
                key={obj.id}
                index={obj.id ? obj.id : 0}
              />
            );
          })}
        </ul>
      </div>
      <Order />
      <MenuAdmin />
    </div>
  );
};

export default App;
