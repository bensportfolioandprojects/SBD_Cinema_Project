import Message from "./Message";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const MessageHistory = ({data}) => {
    const [messages, setMessages] = useState([]);
    let getAll = () => {
        axios.get("http://localhost:3000/forum/getAll")
        .then(res=> {
            setMessages(res.data);
        }).catch((err) => {console.log("Get: ", err)});
    }   
    useEffect(() => {
        getAll();
    });
    return (
        <>
        {
            messages.map((m, i) => {
                return <Message data ={m.message} key ={i}/>;
            })
        }
        </>
    );
}
 
export default MessageHistory;