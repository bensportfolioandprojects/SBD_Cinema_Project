import Message from "./Message";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const MessageHistory = ({data}) => {
    const [messages, setMessages] = useState([]);

    let getAll =()=>data.getAll();

    //This creates a singular timeout of updates. GetAll is also set in Input to run every time a new message is sent.
    //This is to solve constant update issue. Bit messy but functional
    useEffect(() => {
        getAll();
        let timer = setInterval(() =>{
            getAll();
        }, 10000);
        return () => { clearTimeout(timer);}
    }, []);

    return (
        <>
        {
            data.messages.map((m, i) => {
                return <Message data ={m} key ={i}/>;
            })
        }
        </>
    );
}
 
export default MessageHistory;