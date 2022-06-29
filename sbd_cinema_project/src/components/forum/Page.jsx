import MessageHistory from "./MessageHistory";
import Input from "./Input";
import axios from 'axios';
import { useState } from 'react';
import ForumTitle from "../ForumTitle";

const Page = () => {
    const [messages, setMessages] = useState([]);
    let getAll = () => {
        axios.get("http://localhost:3001/forum/getAll")
        .then(res=> {
            setMessages(res.data);
        }).catch((err) => {console.log("Get: ", err)});
    }
    return (
    <>
        <ForumTitle/>
        <Input getter={getAll}/>
        <div className="allMessages">
            <MessageHistory data={{messages, getAll}}/>
        </div>
    </>
    );
}
 
export default Page;