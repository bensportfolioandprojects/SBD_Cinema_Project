import { useState } from 'react';

function Email() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/send', {
        method: "POST",
        body: JSON.stringify({name, email, message}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(
    (response) => (response.json())
        ).then((response) => {
        if (response.status === 'success') {
            alert("Message Sent.");
        } else if (response.status === 'fail') {
            alert("Message failed to send.")
        }
        })
    }

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