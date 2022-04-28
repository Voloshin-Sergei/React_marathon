import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
import { FireBaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/PokemonContext';

import s from './style.module.css';

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, []);
  const history = useHistory();
  const handleStartGame = () => {
    history.push('/game/board');
  };
  const selectPokemon = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonContext.handleSelectPokemon(key, pokemon);
    setPokemons((prevState) => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          selected: !prevState[key].selected,
        },
      };
    });
  };

  return (
    <>
      <button
        type="button"
        className={s.btn}
        onClick={handleStartGame}
        disabled={Object.keys(pokemonContext.pokemons).length < 5}>
        Start game
      </button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) => (
          <PokemonCard
            key={key}
            id={id}
            name={name}
            img={img}
            type={type}
            values={values}
            isActive={true}
            isSelected={selected}
            selectPokemon={() => {
              if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                selectPokemon(key);
              }
            }}
            className={s.card}
          />
        ))}
      </div>
    </>
  );
};

export default StartPage;
