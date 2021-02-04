import { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../components/PokemonCard/Cards.json';

import s from './style.module.css';

const GamePage = () => {
  const [pokemons, setPokemons] = useState(POKEMONS);

  const handleClickCard = (id) => {
    setPokemons(
      pokemons.map((pokemon) => {
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }
        return pokemon;
      }),
    );
  };

  return (
    <>
      <h3 className={s.title}>Game</h3>
      <div className={s.flex}>
        {pokemons.map((item) => (
          <PokemonCard
            isActive={item.active}
            onCardClick={handleClickCard}
            key={item.id}
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

export default GamePage;
