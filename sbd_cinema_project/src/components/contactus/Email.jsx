import { useState } from 'react';
import { emailRegex } from './emailRegex';
import axios from 'axios';

function Email() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email.length) {
            return {
                status: true,
                value: "Email is required"
            };
        } else if (!emailRegex.test(email)) {
            console.log(email);
            return {
                status: true,
                value: "Email is invalid"
            };
        }
        return await axios({
            url: 'http://localhost:3002/send',
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            data: JSON.stringify({name, email, message})
        }).then((response) => {
            if(response.data.status === 'success') {
                alert("Message Sent.");
              } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
              }
        return response.data;
    }).catch((err) => console.log(err))
    };

    return (
        <div className="Email">
            <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" id="message" value={message} onChange={e => setMessage(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        );
    }


export default Email;