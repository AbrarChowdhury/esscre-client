import React, {useContext, useEffect, useState} from 'react'
import CheckoutBtn from '../../components/checkoutBtn/checkoutBtn.component'
import AddToCartBtn from '../../components/addToCartBtn/AddToCartBtn.component'
import './ArtDisplay.styles.scss'
import Grid from '@material-ui/core/Grid';
import ModalImage from '../../components/modalImage/modalImage.component'
import { ArtContext } from '../../context/artContext'

 

function ArtDisplay(props) {
    const { artData } = useContext(ArtContext)
    const [ art, setArt ]= useState()
    const id =props.match.params.name

   
    useEffect(()=>{
        
        artData && artData.map((currentArt) => (currentArt._id) === id ? setArt(currentArt):null)        
    
    },[artData])
    
    return (
        <div className="ArtDisplay full-page">
         <br/>
             <div className="container">
        {art?(
            <Grid container direction="row" justify="center">
                <Grid item xs={6} className="box">
                    <h1>{art.title}</h1>
                    <ModalImage className = "modal-image" imageUrl={art.image} name={art.title} />
                </Grid>
                <Grid item xs={6} className="box">
                    <h1>Story</h1>
                    <div className="story qoute">{art.story}</div>
                    <Grid direction="row" container>
                    <Grid item xs={6}>
                        <AddToCartBtn id = {art._id} title={art.title} image={art.image} price={art.price}/>
                    </Grid>
                    <Grid item xs={6}>
                    <CheckoutBtn/>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" item xs={12} >
                    <Grid item xs={6} className="box">
                        <h3>Media:  <span>{art.medium}</span></h3>
                        <h3>Size:  <span>{art.dimensions}</span></h3>
                        <h3>Worth:  <span>{art.price}</span></h3>
                    </Grid>
                    <Grid item xs={6} className="box">
                        <h3>Artist: <span>{art.artist}</span></h3>
                        <h3>Profession: <span>{art.profession}</span></h3>
                        <h3>Passion: <span>{art.passion}</span></h3>
                    </Grid>
                </Grid>
            </Grid>
            ):null}            
            </div>
        </div>
            )
        }

export default ArtDisplay
