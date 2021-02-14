import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import StartPage from './routes/Start/StartPage';
import BoardPage from './routes/Board/BoardPage';
import FinishPage from './routes/Finish/FinishPage';

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [finishBoard, setFinishBoard] = useState([]);
  const handleSelectPokemon = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }
      const newState = { ...prevState, [key]: pokemon };
      return newState;
    });
  };
  const clearPokemonContext = () => {
    setSelectedPokemons({});
    setFinishBoard([]);
  };
  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemons,
        handleSelectPokemon,
        finishBoard: finishBoard,
        setFinishBoard,
        clearPokemonContext,
      }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
