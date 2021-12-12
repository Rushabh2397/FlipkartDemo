import { Route, Routes, } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import './App.css';

function App() {
  return (
    <div className="App">
       <Header/>
      {/*<Card/> */}
    
      <Routes>
      <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
  );
}

export default App;
