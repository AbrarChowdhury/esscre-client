import './App.css';
import Navbar from './components/navbar/Navbar.component'
import Home from './pages/home/Home.component'
import Art from './pages/art/Art.component'
import ArtDisplay from './pages/artDisplay/ArtDisplay'
import SellArt from './pages/sellArt/SellArt.component'
import Checkout from './pages/checkout/Checkout'
import CustomArt from './pages/customArt/CustomArt.component'
import { BrowserRouter, Route } from 'react-router-dom'
import CartContextProvider from './context/cartContex'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <CartContextProvider>
        <Navbar/>
        <div className="routes">
          <Route exact path='/' component={Home}/>
          <Route exact path='/art' component={Art}/>
          <Route exact path='/art/:name' component={ArtDisplay}/>
          <Route exact path='/sell' component={SellArt}/>
          <Route exact path='/custom' component={CustomArt}/>       
          <Route exact path='/cart' component={Checkout}/>       
        </div>
      </CartContextProvider> 
      </div>
    </BrowserRouter>
    
  );
}

export default App;
