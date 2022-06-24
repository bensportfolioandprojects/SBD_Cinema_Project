import MessageHistory from "./MessageHistory";
import Input from "./Input";
import axios from 'axios';
import { useState } from 'react';

const Page = () => {
    const [messages, setMessages] = useState([]);
    let getAll = () => {
        axios.get("http://localhost:3000/forum/getAll")
        .then(res=> {
            setMessages(res.data);
        }).catch((err) => {console.log("Get: ", err)});
    }
    return (
    <>
        <MessageHistory data={{messages, getAll}}/>
        <Input getter={getAll}/>
    </>
    );
}
 
export default Page;