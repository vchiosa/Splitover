import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Game from './Components/Game';
import Game2 from './Components/Game2';
import Game3 from "./Components/Game3"
import Winner from './Components/Winner';
import Loser from './Components/Loser';
import { Routes, Route} from 'react-router'
import 'font-awesome/css/font-awesome.min.css'; 
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="game" element={<Game></Game>}></Route>
      <Route path="game/:referrer" element={<Game></Game>}></Route>
      <Route path="game2" element={<Game2></Game2>}></Route>
      <Route path="/game2/:referrer" element={<Game2></Game2>}></Route>
      <Route path="game3" element={<Game3></Game3>}></Route>
      <Route path="/game3/:referrer" element={<Game3></Game3>}></Route>
      <Route path="success" element={<Winner></Winner>}></Route>
      <Route path="failure" element={<Loser></Loser>}></Route>
      </Routes>


   </div>
  );
}

export default App;
