import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
  const handlerClick = () => {
    onChangePage && onChangePage('app');
  };
  return (
    <>
      <div className={s.title}>This is Game Page!</div>
      <button className={s.btn} onClick={handlerClick}>
        Home
      </button>
    </>
  );
};

export default GamePage;
