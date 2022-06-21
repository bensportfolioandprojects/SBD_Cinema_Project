import ClassInfo from "./ClassInfo";

const ClassList = () => {
    const classArray = [
        {
            classImage: "https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_u_rgb.png",
            classTitle: "U - Universal",
            classText: "A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child"
        },
        {
            classImage: "https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_pg_rgb.png",
            classTitle: "PG - Parental Guidance",
            classText: "General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children."
        },
        {
            classImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BBFC_12A_2019.svg/1200px-BBFC_12A_2019.svg.png",
            classTitle: "12A/12 - Suitable for 12 years and over",
            classText: "Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work."
        },
        {
            classImage: "https://mwldan.co.uk/sites/default/files/BBFC%2015_RGB%20copy.png",
            classTitle: "15 - Suitable only for 15 years and over",
            classText: "No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work."
        },
        {
            classImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/1024px-BBFC_18_2019.svg.png",
            classTitle: "18 - Suitable only for adults",
            classText: "No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment."
        }
    ]

    
    return (
        <div className="classificationsList">
            {
                classArray.map((classifications) => {
                    return <ClassInfo data={classifications}/>
                })
            }
        </div>
    );
}
 
export default ClassList;