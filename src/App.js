import logo from './logo.svg';
import './App.css';
import {Counter} from './features/counter/Counter'
import { useSelector } from 'react-redux'
import Products from './Pages/Products';
function App() {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="App">

      <Products/>
    </div>
  );
}

export default App;
