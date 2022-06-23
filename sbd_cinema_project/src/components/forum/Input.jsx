import axios from 'axios';
import { useState } from 'react';

const Input = () => {
    const [message, setMessage] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (message){
        const url = "http://localhost:3000/forum/create"
        const formdata = {
            message
        }
        axios.post(url, formdata)
        .then(res=> {
            console.log(res);
        }).catch((err) => {console.log("Create: ", err)});
    }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input id="forumInput" type ="text" value={message} onChange={e=>setMessage(e.target.value)}></input>
            <button id="forumSubmit" value="Submit">Submit</button>
        </form>
    );
}
export default Input;