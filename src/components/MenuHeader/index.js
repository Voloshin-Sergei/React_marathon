import { useState } from 'react';
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const handlerBurgerClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Menu isOpen={isOpen} handlerBurgerClick={handlerBurgerClick} />
      <NavBar isOpen={isOpen} bgActive={bgActive} handlerBurgerClick={handlerBurgerClick} />
    </>
  );
};

export default MenuHeader;
