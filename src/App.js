import React, { useState, useEffect,useContext} from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar.component'
import Home from './pages/home/Home.component'
import Art from './pages/art/Art.component'
import ArtDisplay from './pages/artDisplay/ArtDisplay'
import SellArt from './pages/sellArt/SellArt.component'
import Checkout from './pages/checkout/Checkout'
import CustomArt from './pages/customArt/CustomArt.component'
import Footer from './components/footer/footer.component'
import { BrowserRouter, Route } from 'react-router-dom'
import ArtConetextProvider from './context/artContext'
import CartContextProvider from './context/cartContex'
import UserContextProvider from './context/userContext'
import api from './context/apiContext'
import axios from 'axios'
import { ArtContext } from './context/artContext'
function App() {
  console.log(api, "from app js")
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`${api}/art`)
  .then(function (response) {
    const responseData = response.data;
    console.log(responseData)
    setData(responseData)
    console.log('state',responseData)
  })
  .catch(function (error) {
    console.log(error.data);
  })
  },[]);
  return (
    <ArtConetextProvider>
      <SubApp data={data}/>  
    </ArtConetextProvider> 
  );
}

function SubApp({data}){
const {loadArtData} = useContext(ArtContext)
loadArtData(data)
return(
  <BrowserRouter>
    <div className="App">
    <CartContextProvider>
    <UserContextProvider>
  
      <Navbar/>
      <div className="routes">
        <Route exact path='/' component = { Home }/>
        <Route exact path='/art' component = { () => <Art data={ data } /> }/>
        <Route exact path='/art/:name' component = { ArtDisplay }/>
        <Route exact path='/sell' component = { SellArt }/>
        <Route exact path='/custom' component = { CustomArt }/>       
        <Route exact path='/cart' component = { Checkout }/>       
      </div>
    <Footer/>
    </UserContextProvider>
    </CartContextProvider>
    </div>
  </BrowserRouter>

)
}
export default App;
