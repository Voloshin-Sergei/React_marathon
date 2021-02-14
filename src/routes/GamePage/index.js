import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import StartPage from './routes/Start/StartPage';
import BoardPage from './routes/Board/BoardPage';
import FinishPage from './routes/Finish/FinishPage';

const GamePage = () => {
  const match = useRouteMatch('/game');
  const [pokemon, setPokemon] = useState([]);

  const handleSelected = (val) => {
    setPokemon(val);
  };

  return (
    <PokemonContext.Provider value={{ pokemon, isSelected: handleSelected }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
