import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './style.module.css';
const Menu = ({ isOpen, handlerBurgerClick }) => {
  const links = [
    { name: 'HOME', href: '/' },
    { name: 'GAME', href: '/game' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false,
      })}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {links.map(({ name, href }, index) => (
            <li key={index}>
              <Link to={href} onClick={handlerBurgerClick}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
