const LinkWidget = ({data}) => {
    return (
        <div>
            <a id="hp-widget" href={data.link}>
                <p id="hp-widgettitle">
                {data.title}
                </p>
                <p id="hp-widgetdesc">
                {data.desc}
                </p>
            </a>
        </div>
    );
}
 
export default LinkWidget;