import Message from "./Message";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const MessageHistory = ({data}) => {
    const [messages, setMessages] = useState([]);
    // let getAll = () => {
    //     axios.get("http://localhost:3000/forum/getAll")
    //     .then(res=> {
    //         setMessages(res.data);
    //     }).catch((err) => {console.log("Get: ", err)});
    // }

    let getAll =()=>data.getAll();

    //bit of a cheat; updates every second. Not the best solution at all
    useEffect(() => {
        getAll();
        let timer = setInterval(() =>{
            getAll();
        }, 1000);
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