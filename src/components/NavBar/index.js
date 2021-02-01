import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({ isActive, handlerBurgerClick }) => {
  const handlerClick = () => {
    handlerBurgerClick();
  };
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          href="#nav"
          className={cn(s.menuButton, { [s.active]: isActive })}
          onClick={handlerClick}>
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
