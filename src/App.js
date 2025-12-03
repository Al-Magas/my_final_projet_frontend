
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Reservations from './components/Reservations';
import { HashRouter  } from "react-router-dom";
import Presentation from './components/Presentation';
import Menu from './components/Menu';


function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Nav />
        <Main />
        <Presentation/>
        <Menu/>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
