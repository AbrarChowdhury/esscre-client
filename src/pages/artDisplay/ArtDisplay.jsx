import React from 'react'
import artData from '../../artData'
import _ from 'lodash'
import './ArtDisplay.styles.scss'
import Grid from '@material-ui/core/Grid';

function ArtDisplay(props) {
    const name =_.kebabCase(props.match.params.name)
    const art = artData.find((art)=> _.kebabCase(art.name)===name)
    return (
        <div className="ArtDisplay">
        <br/>
            <div className="container">
            <Grid container  direction="row" justify="center" spacing={2}>
                <Grid item xs={6}>
                <h1>Title: {art.name}</h1>
                <img src={art.imageUrl} alt={art.name}/>
                </Grid>
                <Grid item xs={6}>
                <h1>Story</h1>
                <div className="story">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
                </Grid>
                <Grid item xs={6}>
                <div className="art">
                </div>
                </Grid>
            </Grid>            
            </div>
            <h2>Price: {art.price}</h2>
            <h2>by: {art.creator}</h2>
            <h3>profession: {art.profession}</h3>
            <h3>passion: {art.passion}</h3>
        </div>
            )
        }

export default ArtDisplay
