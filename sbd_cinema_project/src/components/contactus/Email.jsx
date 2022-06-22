import React from 'react';

function Email(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3002/send',{
        method: "POST",
        body: JSON.stringify(state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(
    (response) => (response.json())
        ).then((response) => {
        if (response.status === 'success') {
            alert("Message Sent.");
            resetForm()
        } else if (response.status === 'fail') {
            alert("Message failed to send.")
        }
        })
    }

    resetForm = () => {
        setState({name: '', email: '', message: ''})
    }

  
    return(
        <div className="Email">
            <form id="contact-form" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={state.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={state.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" id="message" value={state.message} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</   button>
            </form>
        </div>
        );
    }

    const onNameChange = event => {
	    setName(value);
    }

    const onEmailChange = event => {
	    setEmail(value)
    }

    const onMessageChange = event => {
	    setMessage(value)
}


export default Email;