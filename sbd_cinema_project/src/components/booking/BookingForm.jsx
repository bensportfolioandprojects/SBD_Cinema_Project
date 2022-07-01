import axios from 'axios';
import { useState } from 'react';
import {v4} from 'uuid';
import { NavLink } from 'react-router-dom';

const BookingForm = ({data}) => {
    const [username, setUsername] = useState("");
    const [movie, setMovie] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [seats, setSeats] = useState(0);
    const [adulttickets, setAdult] = useState(0);
    const [childtickets, setChild] = useState(0);
    const [concessions, setConcession] = useState(0);
    const [bookingid, setBookingid] = useState("");
    const remSeats = seats - (adulttickets + childtickets + concessions);
    let times = ["09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
        "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
        "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
    if ({data}.times){
        times = {data}.times;
    }
    
    let movies = ["Lightyear", "Jurassic World: Dominion", "Doctor Strange in the Multiverse of Madness", "Bullet Train", "SpiderMan: Accross the Spiderverse Part One", "Thor: Love and Thunder", "The Railway Children Return", "Top Gun: Maverick"];
    if ({data}.movies){
        movies = {data}.movies;
    }
        
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const url = "http://localhost:3001/booking/create"
        const formdata = {
            username,
            movie,
            date,
            time,
            seats,
            adulttickets,
            childtickets,
            concessions,
            bookingid: v4()
        }
        let count = 0;
        let maxCap = 10;
        const url2 = `http://localhost:3001/booking/getAllMovieTime/${movie}/${date}/${time}`;
        if (time && date && movie && username && (seats !== 0)){
        axios.get(url2)
            .then(res => {
                console.log(res);
                setBookingid(formdata.bookingid);
                for (const bookings of res.data) {
                    console.log("seats", bookings.seats);
                    count += bookings.seats;
                }
                if (count + seats > maxCap) {
                    setBookingid("");
                    alert(`There are not enough seats; there are ${maxCap - count} seats available.`);
                    
                } else if (remSeats !== 0) {
                    setBookingid("");
                    alert(`Seats do not match tickets.`);
                    
                } else {
                    axios.post(url, formdata)
                        .then(res => {
                            console.log(res);
                        }).catch("ERROR POST");
                }
            }).catch("ERROR GET");
        } else {
            alert("All areas need to be filled in")
        }
    };

    return (
        <div>
            <h1 className="bookingtitle">Booking Form</h1>
            <div className="bookingform">
                <form onSubmit={handleSubmit} className="entryform">
                <label htmlFor="bookingname" >Your Name: </label>
                <input type="text" id="bookingname" value={username} onChange={e => setUsername(e.target.value)} /><br/>
                <label htmlFor="bookingmovie" value="Select your Movie">Movie: </label>
                <select type="select" id="bookingmovie" value={movie} onChange={e => setMovie(e.target.value)}>
                    <option value="" selected disabled hidden>Pick a movie</option>
                    {
                        movies.map((m, i) => {
                            return <option value={m} key={i}>{m}</option>
                        })
                    }
                </select><br/>
                <label htmlFor="bookingdate" >Date and Time: </label>
                <input type="date" id="bookingdate" value={date} onChange={e => setDate(e.target.value)} /><br/>
                <label htmlFor="bookingtime" >Time: </label>
                <select id="bookingtime" value={time} onChange={e => setTime(e.target.value)}>
                    <option value="" selected disabled hidden>Pick a time</option>
                    {
                        times.map((t, i) => {
                            return <option value={t} key={i}>{t}</option>
                        })
                    }
                </select><br/>
                <label htmlFor="bookingseats" value="Seats:">No of Seats: </label>
                <input type="number" id="bookingseats" value={seats} onChange={e => setSeats(parseInt(e.target.value))} /><br/>
                <label htmlFor="bookingadult" value="Adult Tickets:">Adult Tickets: </label>
                <input type="number" id="bookingadult" value={adulttickets} onChange={e => setAdult(parseInt(e.target.value))} /><br/>
                <label htmlFor="bookingchild" value="Child Tickets:">Child Tickets: </label>
                <input type="number" id="bookingchild" value={childtickets} onChange={e => setChild(parseInt(e.target.value))} /><br/>
                <label htmlFor="bookingconcession" value="Concessions: ">Concessions: </label>
                <input type="number" id="bookingconcession" value={concessions} onChange={e => setConcession(parseInt(e.target.value))} />
                <button type="submit" className="submitbtn">Submit</button>
                <label id="bookingreftitle">Booking Ref:</label>
                <label id="bookingref">{bookingid}</label>
                <p>(Save this if you wish to pay later)</p>
                <NavLink to='../payment'
                     state = {{bookingid}}>
                    Continue to Payment
                </NavLink>
                
                </form>
                
            </div>
            
            <p className="addinfo">Bookings can be changed or refunded by contacting us <a href="contactus.html">here.</a> By making a booking with us you agree to our terms and conditions including our right to refuse entry to anyone who eats pizza with pineapple on.</p>
        </div>
    );
}

export default BookingForm;