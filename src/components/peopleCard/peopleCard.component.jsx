import React from 'react'
import "./peopleCard.styles.scss"
function PeopleCard( {name, title, designation, image} ) {
    return (
        <div className="PeopleCard">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{designation}</p>
        </div>
    )
}

export default PeopleCard
