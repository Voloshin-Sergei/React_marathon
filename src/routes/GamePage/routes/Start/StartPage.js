import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/PokemonContext';

import s from './style.module.css';

const StartPage = () => {
  const SelectedContext = useContext(PokemonContext);
  const firebase = useContext(FireBaseContext);
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, [firebase]);

  const handleClickCard = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        let pokemon = { ...item[1] };
        if (pokemon.id === id && !pokemon.isSelected) {
          pokemon.isSelected = true;
          pushToContext(item);
        }

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

  const pushToContext = (val) => {
    SelectedContext.pokemon.push(val);
  };

  return (
    <>
      <h3 className={s.title}>Game</h3>
      <Link className={s.btn} to={'/game/board'}>
        Start Game
      </Link>
      <div className={s.flex}>
        {Object.entries(pokemons).map(([key, item]) => (
          <PokemonCard
            isActive={true}
            isSelected={item.isSelected}
            onCardClick={handleClickCard}
            key={key}
            id={item.id}
            type={item.type}
            name={item.name}
            img={item.img}
            values={item.values}
          />
        ))}
      </div>
    </>
  );
};

export default StartPage;
