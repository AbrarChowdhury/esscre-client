import './App.css';
import Navbar from './components/navbar/Navbar.component'
import Home from './pages/home/Home.component'
import Art from './pages/art/Art.component'
import SellArt from './pages/sellArt/SellArt.component'
import CustomArt from './pages/customArt/CustomArt.component'
import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="routes">
        <Route exact path='/' component={Home}/>
        <Route path='/art' component={Art}/>
        <Route path='/sell' component={SellArt}/>
        <Route path='/custom' component={CustomArt}/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
