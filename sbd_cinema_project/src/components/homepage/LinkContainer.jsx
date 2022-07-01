import LinkWidget from "./LinkWidget";
import DefaultImg from '../../resources/shrekDemo.png';

const LinkContainer = () => {
    const widgets = [
        {
           link: "./PlacesToGo",
           title: "Places To Go",
           desc: "See great places to visit before or after your film"
        },
        {
            link: "./ContactUs",
           title: "Contact Us",
           desc: "Click here to get in touch"
        },
        {
            link: "./DiscussionBoard",
           title: "Discussion Board",
           desc: "Post and read messages with other film fans"
        },
        {
            link: "./Classifications",
           title: "Classifications",
           desc: "Click here for information on film classifications and what they mean"
        }
]
    return (
        <div>
        {
            widgets.map((widget, i) => {
                return <div className="homeWidget">
                    <LinkWidget data ={widget} key ={i}/>
                </div>
            })
        }
        </div> 
    );
}

export default LinkContainer;