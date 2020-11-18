import React from 'react'
// import artData from '../../artData';
import ArtCard from '../artCard/artCard'
import Grid from '@material-ui/core/Grid';



function ArtCollection({ data }) {
        console.log('from art----->', data)
        const artData = data;
    return (
        <div>
        <Grid container spacing={8}>
            {
                artData.map((art, i) => 
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ArtCard key={i} data={art} />
                    </Grid> 
                )     
            }
        </Grid>
            
        </div>
    )
}

export default ArtCollection
