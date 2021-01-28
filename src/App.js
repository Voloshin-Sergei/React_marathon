import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import urlBg from './assets/bg1.jpg';

const App = () => {
  return (
    <>
      <Header title={'This is Pokemon Card Game'} descr={'Simple Triple Triad Card Game'} />
      <Layout id={1} title={'First layout'} descr={'Description'} urlBg={urlBg} />
      <Layout id={2} title={'Second layout'} descr={'Description'} colorBg={'#ffa401'} />
      <Layout id={3} title={'Third layout'} descr={'Description'} urlBg={urlBg} />
      <Footer />
    </>
  );
};

export default App;
