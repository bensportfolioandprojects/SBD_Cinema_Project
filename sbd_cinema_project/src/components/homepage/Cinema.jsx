// import Listing from "./Listing";
// import CarouselBtn from "./CarouselBtn";
import BeeMovie from '../../resources/BMovieDemo.png';
import Shrek from '../../resources/shrekDemo.png';
import Morbius from '../../resources/morbiusDemo.png';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

const Cinema = () => {

    // const[stateValue, stateSetter]=useState(1);

    // const listings = [
    //     {
    //        link: "#",
    //        title: "James and the Mediocre Beach",
    //        img: DefaultImg,
    //     },
    //     {
    //         link: "#",
    //        title: "Larry Dotter and the Mug of Water",
    //        img: DefaultImg2,
    //     },
    //     {
    //         link: "#",
    //        title: "Attacking Public Smith",
    //        img: DefaultImg,
    //     },
    //     {
    //         link: "#",
    //        title: "Sergeant England",
    //        img: DefaultImg2,
    //     }
    // ]

    // let func = (val, inc, setter) => {
    //     if (val + inc < 1){
    //         setter(4);
    //     }else if (val + inc > 4 ){
    //         setter(1);
    //     }else{
    //         setter(val + inc)
    //     }
    // };

    // function MyComponent(props){
    //     useEffect(()=>{
    //         // do stuff here...
    //     }, []) // <-- empty dependency array
    //     return <div></div>
    // }

    // setTimeout(function () { func(stateValue, -1, stateSetter);}, 10000);

    // const buttons = [
    //     {
    //         text: "prev",
    //         listener: function () { func(stateValue, -1, stateSetter);},
    //     },
    //     {
    //         text: "next",
    //         listener: function () { func(stateValue, 1, stateSetter);}
    //     },
    // ]
    // return (
    // <div id="hp-cinema">
    //     <div id="hp-viewport">
    //         <CarouselBtn data={buttons[0]}/>
    //         <CarouselBtn data={buttons[1]}/>
    //         <Listing data={listings[stateValue-1]}/>
    //     </div> 
    // </div> 
    return (
        <div id="carouselContainer">
            <Carousel id="hello" fade>
                <Carousel.Item>
                    <a href="#">
                        <img src={BeeMovie} />
                    </a>
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="#">
                        <img src={Shrek} />
                    </a>
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="#">
                        <img src={Morbius} />
                    </a>
                    <Carousel.Caption>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Cinema;