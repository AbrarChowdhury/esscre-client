import React,{useContext, useEffect, useState} from 'react'
// import artData from '../../artData';
import ArtCard from '../artCard/artCard'
import Grid from '@material-ui/core/Grid';
import { ArtContext } from '../../context/artContext'


function ArtCollection(props) {
        
    const { artData } = useContext(ArtContext)
    console.log('art Collection data',artData)
    return (
        <div>
        <Grid container spacing={8}>
            {  
                artData ?
                artData.map((art) => 
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ArtCard key={art.id} data={art} />
                    </Grid> 
                )
                :null
            }
        </Grid>
            
        </div>
    )
}

export default ArtCollection
