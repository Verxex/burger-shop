import React from 'react';

const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className="top">
    <div className="wrap">
      <div className="header-content">
        <div className="header-rating">
          <div className="header-rating_tag">Рейтинг</div>
          <div className="header-rating_icon">★★★★★</div>
        </div>
        <div className="header-devider"></div>
        <h1 className="font-effect-fire-animation">{title}</h1>
        <h3>
          <span>Быстрая доставка горячих</span>
          <span className="sub-header">#бургеров</span>
        </h3>
      </div>
    </div>
  </header>
);

export default Header;
