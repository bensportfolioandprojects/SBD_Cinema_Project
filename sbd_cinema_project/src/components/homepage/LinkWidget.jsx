const LinkWidget = ({data}) => {
    return (
        <a id="hp-widget" href={data.link}>
            <img src={data.img} alt="image"/>
            <p id="hp-widgettitle">
                {data.title}
            </p>
            <p id="hp-widgetdesc">
                {data.desc}
            </p>
        </a>
    );
}
 
export default LinkWidget;