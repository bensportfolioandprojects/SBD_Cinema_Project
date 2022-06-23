import axios from 'axios';
import { useState } from 'react';
const BookingForm = () => {
    const [username, setUsername] = useState("");
    const [movie, setMovie] = useState("");
    const [dateandtime, setDate] = useState("");
    const [adulttickets, setAdult] = useState(0);
    const [childtickets, setChild] = useState(0);
    const [concessions, setConcession] = useState(0);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const url = "http://localhost:3000/booking/create"
        const formdata = {
            username,
            movie,
            dateandtime, 
            adulttickets,
            childtickets,
            concessions
        }

        axios.post(url, formdata)
        .then(res=> {
            console.log(res);
        }).catch();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bookingname" >Your Name: </label>
            <input type="text" id="bookingname" value={username} onChange={e=>setUsername(e.target.value)}/>
        
            <label htmlFor="bookingmovie" value="Select your Movie">Movie: </label>
            <select type="select" id="bookingmovie" value={movie} onChange={e=>setMovie(e.target.value)}>
                <option value="" selected disabled hidden>Pick a movie</option>
                <option value="Morbin" >Morbin</option>
            </select>
            <label htmlFor="bookingdate" >Date and Time: </label>
            <input type="datetime-local" id="bookingdate" value={dateandtime} onChange={e=>setDate(e.target.value)}/>
            <label htmlFor="bookingadult" value="Adult Tickets:">Adult Tickets: </label>
            <input type="number" id="bookingadult" value={adulttickets} onChange={e=>setAdult(parseInt(e.target.value))}/>
            <label htmlFor="bookingchild" value="Child Tickets:">Child Tickets: </label>
            <input type="number" id="bookingchild" value={childtickets} onChange={e=>setChild(parseInt(e.target.value))}/>
            <label htmlFor="bookingconcession" value="Concessions: ">Concessions: </label>
            <input type="number" id="bookingconcession" value={concessions} onChange={e=>setConcession(parseInt(e.target.value))}/>
            <button>Submit</button>
        </form>
    );
}
 
export default BookingForm;