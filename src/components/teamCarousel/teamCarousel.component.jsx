import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PeopleCard from '../peopleCard/peopleCard.component'
import teamData from '../../teamData'
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const people=[];
teamData.map((person,i) => {
    people.push(<div className="item" data-value={i}><PeopleCard name={person.name} title={person.title} designation={person.designation} image={person.image} /></div>)
})

function TeamCarousel({advisor}) {
    return (
        <div>
            <h1>Our Team</h1>
            <AliceCarousel mouseTracking disableButtonsControls items={people} responsive={responsive} />
        </div>
    )
}

export default TeamCarousel


