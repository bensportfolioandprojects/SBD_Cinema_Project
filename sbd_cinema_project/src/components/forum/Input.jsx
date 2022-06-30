import axios from 'axios';
import { useState } from 'react';

const Input = ({ getter }) => {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [movie, setMovie] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (message) {
            const url = "http://localhost:3001/forum/create"
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
        <div className="forumInput">
            <form onSubmit={handleSubmit}>
                <label htmlFor='forummovie'>Movie: </label>
                <input id="forummovie" type="text" value={movie} onChange={e => setMovie(e.target.value)}></input>
                <label htmlFor='forumusername'>Username: </label>
                <input id="forumusername" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label htmlFor='forummessage'>Message: </label>
                <textarea id="forummessage" type="text" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button id="forumsubmit" value="Submit">Submit</button>
            </form>
        </div>
    );
}
export default Input;