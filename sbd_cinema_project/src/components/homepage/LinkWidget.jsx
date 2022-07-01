import { NavLink } from 'react-router-dom';

const LinkWidget = ({data}) => {
    return (
        <div>
            <NavLink id="hp-widget" to={data.link}>
                <p id="hp-widgettitle">
                {data.title}
                </p>
                <p id="hp-widgetdesc">
                {data.desc}
                </p>
            </NavLink>
        </div>
    );
}
 
export default LinkWidget;