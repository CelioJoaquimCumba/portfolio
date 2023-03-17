import './App.scss';
import Navbar from './components/navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <hr className='divider'/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
