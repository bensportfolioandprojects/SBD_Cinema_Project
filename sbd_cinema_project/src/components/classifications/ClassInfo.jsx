const ClassInfo = ({data}) => {
    
    const {classImage, classTitle, classText} = data;
    
    return ( 
        <div className="classData">
            <div className="classIcon">
                <img src={classImage} alt={classTitle} width="150px"/>
            </div>
            <div className="classWords">
                <h2>{classTitle}</h2>
                <h4>{classText}</h4>
            </div>
        </div>
     );
}
 
export default ClassInfo;