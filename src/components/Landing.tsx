import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import restaurants from '../sample-restaurants';

type restaurantType = {
  title: string;
  url: string;
  id: number;
};

const Landing: React.FC = () => {
  const [restaurant, setRestaurant] = React.useState<restaurantType>();
  const [display, setDisplay] = React.useState(false);
  const navigate = useNavigate();

  const getTitle = (restaurant: restaurantType) => {
    setRestaurant(restaurant);
  };

  const goToResaurant = () => {
    
    navigate(`/restaurant/${restaurant?.url}/`);
  };

  return (
    <div className="restaurant_select">
      <div className="restaurant_select_top">
        <div
          onClick={() => setDisplay(!display)}
          className="restaurant_select_top-header font-effect-outline">
          {restaurant?.title ? restaurant?.title : 'Выбери рестаран'}
        </div>
        <div className="arrow_picker">
          <div className="arrow_picker-up"></div>
          <div className="arrow_picker-down"></div>
        </div>
      </div>
      {display ? (
        <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((restaurant) => (
              <li
                onClick={() => {
                  getTitle(restaurant);
                  setDisplay(!display);
                }}
                key={restaurant.id}>
                {restaurant.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {restaurant?.title && !display ? (
        <button onClick={goToResaurant}>Перейти в ресторан</button>
      ) : null}
    </div>
  );
};

export default Landing;
