import './App.scss';
import Navbar from './components/navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
