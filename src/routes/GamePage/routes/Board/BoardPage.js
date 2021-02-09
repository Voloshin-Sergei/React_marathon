import { useContext } from 'react';
import { PokemonContext } from '../../../../context/PokemonContext';
import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';

const BoardPage = () => {
  const SelectedContext = useContext(PokemonContext);

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {SelectedContext.pokemon.map(([key, item]) => (
          <PokemonCard
            minimize={true}
            className={s.card}
            isActive={true}
            key={key}
            name={item.name}
            img={item.img}
            id={item.id}
            type={item.type}
            values={item.values}
          />
        ))}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
