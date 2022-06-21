import OTDates from "./components/openingtimes/OTDates";
import OTTable from "./components/openingtimes/OTTable";
import OTTitle from "./components/openingtimes/OTTitle";

const openingtimes = () => {
    return ( 
        <>
            <OTTitle/>
            <OTTable/>
            <OTDates/>
        </>
     );
}
 
export default openingtimes;