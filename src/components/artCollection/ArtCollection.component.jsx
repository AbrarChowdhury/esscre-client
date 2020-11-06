import React from 'react'
import artData from '../../artData';
import ArtCard from '../artCard/artCard'
import Grid from '@material-ui/core/Grid';



const artCollection = artData.map((art, i) => 
    <Grid item xs={3}>
        <ArtCard key={i} data={art} />
    </Grid> 
    );

function ArtCollection() {
    return (
        <div>
        <Grid container spacing={8}>
            {artCollection}
        </Grid>
            
        </div>
    )
}

export default ArtCollection
