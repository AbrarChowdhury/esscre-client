import React from 'react'
import NavGrid from '../../components/navGrid/navGrid.component'
import CarouselContainer from '../../components/carouselContainer/CarouselContainer.component'
import TeamCarousel from '../../components/teamCarousel/teamCarousel.component'
import Info from '../../components/info/info.component'
function Home() {
    return (
        <div>
            <CarouselContainer/>
            <p className="qoute">
            “Practicing an art, no matter how well or badly, is a way to make your soul grow, for heaven's sake. Sing in the shower. Dance to the radio. Tell stories. Write a poem to a friend, even a lousy poem. Do it as well as you possibly can. You will get an enormous reward. You will have created something.”
            <br/>
            -Kurt Vonnegut
            </p>
            <NavGrid/>
            <Info/>
            <TeamCarousel/>
        </div>
    )
}

export default Home
