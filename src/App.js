//import { useState } from 'react';
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');

  return (
    <Switch>
      <Route path="/404" component={NotFound}></Route>
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );

  // const [page, setPage] = useState('app');
  // const handlerChangePage = (page) => {
  //   setPage(page);
  // };
  // switch (page) {
  //   case 'app':
  //     return <HomePage onChangePage={handlerChangePage} />;
  //   case 'game':
  //     return <GamePage onChangePage={handlerChangePage} />;
  //   default:
  //     return <HomePage />;
  // }
};

export default App;
