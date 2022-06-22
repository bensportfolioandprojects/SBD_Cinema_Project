import MessageHistory from "./MessageHistory";
import Input from "./Input";
import {useState} from "react";

const Page = () => {
    
    let [s_val, s_func] = useState("");
    return (
    <>
        <Input setter={s_func}/>
        <MessageHistory data={s_val}/>
        
    </>
    );
}
 
export default Page;