import { useState } from 'react';
import { emailRegex } from './emailRegex';
import axios from 'axios';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger} from 'react-bootstrap';

function Email() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [value, setValue] = useState('');

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body id="emailMessage">
                {value}
            </Popover.Body>
        </Popover>
    );

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email.length) {
            console.log("Hello");
            setValue("Please enter an Email address");
        } else if (!email.match(emailRegex)) {
            console.log(email);
            setValue("Please enter a VALID Email address");
        } else {
            setValue("Valid Email address");

        return await axios({
            url: 'http://localhost:3001/contact/send',
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ name, email, message })
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
            return response.data;
        }).catch((err) => console.log(err))
    }};

    return (
        <div className="Email">
            <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="formTitle" htmlFor="name">Name: </label>
                    <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <div className="formTitle">
                        <label htmlFor="exampleInputEmail1">Email address: </label>
                    </div>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <div className="formTitle">
                        <label htmlFor="message">Message: </label>
                    </div>
                    <textarea className="form-control" rows="5" id="message" value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </OverlayTrigger>
            </form>
        </div>
    );
}


export default Email;