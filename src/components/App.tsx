import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectBurgers } from '../redux/slices/menuSlice';
import { createUseStyles } from 'react-jss';

const rootStyle = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1.5fr',
  gripGap: '10px',
  height: '94vh',
  maxWidth: '1500px',
  margin: '0 auto',
  marginTop: '2vh',
};

const useStyles = createUseStyles({
  root: {
    ...rootStyle,
    '& > *': {
      overflowY: 'scroll',
      overflowX: 'hidden',
      border: 'solid 1px #eee',
    },
    '& > *:first-child ': {
      background: '#ededed',
    },
    '& > *:nth-child(2)': {
      padding: '2rem 0',
      overflowY: 'hidden',
      background: '#f2f2f2',
      borderRadius: '4px',
    },
    '& > *:last-child': {
      padding: '2rem',
      background: '#ededed',
    },
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const burgers = useSelector(selectBurgers);
  const dispatch = useAppDispatch();

  return (
    <div className={classes.root}>
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
