import { useState } from 'react';
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = ({ onClickButton }) => {
  const [isActive, setActive] = useState(false);
  const handlerBurgerClick = () => {
    setActive((isActive) => !isActive);
  };

  return (
    <>
      <Menu isActive={isActive} onChangePage={onClickButton} />
      <NavBar isActive={isActive} handlerBurgerClick={handlerBurgerClick} />
    </>
  );
};

export default MenuHeader;
