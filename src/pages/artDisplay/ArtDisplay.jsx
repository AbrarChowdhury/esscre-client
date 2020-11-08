import React,{ useState } from 'react'
import artData from '../../artData'
import _ from 'lodash'
import './ArtDisplay.styles.scss'
import Grid from '@material-ui/core/Grid';
import ModalImage from '../../components/modalImage/modalImage.component'
 

function ArtDisplay(props) {
    const name =_.kebabCase(props.match.params.name)
    const art = artData.find((art)=> _.kebabCase(art.name)===name)
    return (
        <div className="ArtDisplay">
        <br/>
            <div className="container">
            <Grid container  direction="row" justify="center" spacing={6}>
                <Grid item xs={6}>
                    <h1>{art.name}</h1>
                    <ModalImage imageUrl={art.imageUrl} name={art.name} />
                </Grid>
                <Grid item xs={6}>
                    <h1>Story</h1>
                    <div className="story">{art.story}</div>
                    <br/><br/>
                    <Grid container direction="row"  spacing={8}>
                        <Grid item xs={6}>Add to cart</Grid>
                        <Grid item xs={6}>Checkout</Grid>
                        <Grid item xs={4}>
                            <h3>Media:  <span>{art.medium}</span></h3>
                            <h3>Size:  <span>{art.size}</span></h3>
                            <h3>Worth:  <span>{art.price}</span></h3>
                        </Grid>
                        <Grid item xs={8}>
                            <h3>Artist: <span>{art.creator}</span></h3>
                            <h3>Profession: <span>{art.profession}</span></h3>
                            <h3>Passion: <span>{art.passion}</span></h3> 
                        </Grid>
                        
                    </Grid>
                </Grid>
               
          
            </Grid>            
            </div>
        </div>
            )
        }

export default ArtDisplay
