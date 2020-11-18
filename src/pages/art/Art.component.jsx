import React from 'react'
import ArtCollection from '../../components/artCollection/ArtCollection.component'
function Art({data}) {
    return (
        <div>
        <br/><br/>
            <ArtCollection data={data}/>
        </div>
    )
}

export default Art
