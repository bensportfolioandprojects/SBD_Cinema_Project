import axios from 'axios';
import { useState } from 'react';

const Input = ({ getter }) => {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [movie, setMovie] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (message) {
            const url = "http://localhost:3000/forum/create"
            const formdata = {
                username,
                movie,
                message
            }
            axios.post(url, formdata)
                .then(res => {
                    console.log(res);
                    { getter() };
                }).catch((err) => { console.log("Create: ", err) });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input id="forumInput" type="text" value={movie} onChange={e => setMovie(e.target.value)}></input>
            <input id="forumInput" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
            <input id="forumInput" type="text" value={message} onChange={e => setMessage(e.target.value)}></input>
            <button id="forumSubmit" value="Submit">Submit</button>
        </form>
    );
}
export default Input;