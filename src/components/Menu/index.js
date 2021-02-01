import s from './style.module.css';
import cn from 'classnames';

const Menu = ({ isActive, onChangePage }) => {
  return (
    <div className={cn(s.menuContainer, isActive ? [s.active] : [s.deactive])}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          <li>
            <a href="#welcome" onClick={() => onChangePage('app')}>
              HOME
            </a>
          </li>
          <li>
            <a href="#game" onClick={() => onChangePage('game')}>
              GAME
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => onChangePage('about')}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => onChangePage('contact')}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
