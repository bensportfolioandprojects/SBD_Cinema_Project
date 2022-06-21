import LinkWidget from "./LinkWidget";
import DefaultImg from '../../resources/tw1sted.png';

const LinkContainer = () => {
    const widgets = [
        {
           link: "#",
           title: "WIDGET TITLE",
           img: DefaultImg,
           desc: "Description"
        },
        {
            link: "#",
           title: "WIDGET TITLE",
           img: DefaultImg,
           desc: "Description"
        },
        {
            link: "#",
           title: "WIDGET TITLE",
           img: DefaultImg,
           desc: "Description"
        },
        {
            link: "#",
           title: "WIDGET TITLE",
           img: DefaultImg,
           desc: "Description"
        },
        {
            link: "#",
           title: "WIDGET TITLE",
           img: DefaultImg,
           desc: "Description"
        },
        {
            link: "#",
           title: "WIDGET TITLE",
           img: DefaultImg,
           desc: "Description"
        }
]
    return (
        <div id="cinema">
        {
            widgets.map((widget, i) => {
                return <LinkWidget data ={widget} key ={i}/>
            })
        }
        </div> 
    );
}

export default LinkContainer;