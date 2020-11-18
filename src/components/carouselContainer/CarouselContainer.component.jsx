import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CarouselCard from '../carouselCard/CarouselCard' 
function CarouselContainer(props)
{
    var items = [
        {
            image:'https://cdn.britannica.com/60/95760-050-899F8959/River-Landscape-canvas-oil-Adriaen-van-de-1663.jpg',
            title: "Horse Party",
            price: 40000,
            artist: 'Bruce Wayne',
            profession: 'He is Rich'
        },
        {
            image:'https://cdn.theculturetrip.com/wp-content/uploads/2019/01/vincent_van_gogh_-_the_church_in_auvers-sur-oise_view_from_the_chevet_-_google_art_project.jpg',
            title: "Lone Wanderer",
            price: 40000,
            artist: 'Bruce Wayne',
            profession: 'He is Rich'
        },
        {
            image:'https://www.gannett-cdn.com/presto/2020/09/29/NPPP/dabb83bf-057c-405c-9847-3c43ec4970c4-HOPPER-PAINTINGS-2.JPG',
            title: "Ready to die",
            price: 40000,
            artist: 'Bruce Wayne',
            profession: 'He is Rich'
        },
        {
            image:'https://media.newyorker.com/photos/5b51fe6af0c3b96d15e77932/master/w_1600%2Cc_limit/180730_r32500.jpg',
            title: "Ghum paise",
            price: 40000,
            artist: 'Bruce Wayne',
            profession: 'He is Rich'
        },
        {
            image:'https://s31531.pcdn.co/wp-content/uploads/2018/04/patti-mollica_burano-fisherman_painting-composition-tips_Featured.jpg',
            title: "Merchent of Venice",
            price: 40000,
            artist: 'Bruce Wayne',
            profession: 'He is Rich'
        }    
    ]
 
    return (
        <Carousel>
            {
                items.map( (item, i) => <CarouselCard key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default CarouselContainer