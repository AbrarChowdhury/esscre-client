import React from 'react'
import Slider from "react-slick";
import PeopleCard from '../peopleCard/peopleCard.component'
import teamData from '../../teamData'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './teamCarousel.styles.scss'
const people=[];
teamData.map((person,i) => {
    people.push(<div className="item" data-value={i}><PeopleCard name={person.name} title={person.title} designation={person.designation} image={person.image} /></div>)
})

const team = teamData.map((person,i)=><PeopleCard key={i} name={person.name} title={person.title} designation={person.designation} image={person.image} />)
function TeamCarousel({advisor}) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="team-carousel">
            <h1>Our Team</h1>
            <Slider {...settings}>
                {team}
            </Slider>
        </div>
    )
}

export default TeamCarousel


