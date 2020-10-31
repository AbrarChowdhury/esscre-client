import { red } from '@material-ui/core/colors'
import React from 'react'
import './CarouselCard.styles.scss'
function CarouselCard({item}) {
    return (
        <div className='CarouselCard' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})` } }>
            <h1>{item.title}</h1>
        </div>
    )
}

export default CarouselCard
