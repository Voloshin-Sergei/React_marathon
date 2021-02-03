import s from './style.module.css';
import cn from 'classnames';

const Menu = ({ isActive, onChangePage }) => {
  const links = [
    { name: 'HOME', href: '#welcome', rout: 'app' },
    { name: 'GAME', href: '#game', rout: 'game' },
    { name: 'ABOUT', href: '#about', rout: 'about' },
    { name: 'CONTACT', href: '#contact', rout: 'contact' },
  ];
  return (
    <div className={cn(s.menuContainer, isActive ? [s.active] : [s.deactive])}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => onChangePage(link.rout)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
