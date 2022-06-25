import axios from 'axios';
import { useState } from 'react';
const BookingForm = () => {
    const [username, setUsername] = useState("");
    const [movie, setMovie] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [seats, setSeats] = useState(0);
    const [adulttickets, setAdult] = useState(0);
    const [childtickets, setChild] = useState(0);
    const [concessions, setConcession] = useState(0);
    const remSeats = seats - (adulttickets + childtickets + concessions);
    const times = ["09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
        "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00",
        "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

    const validation = () => {

        console.log("goodbye")



    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/booking/create"
        const formdata = {
            username,
            movie,
            date,
            time,
            seats,
            adulttickets,
            childtickets,
            concessions
        }
        let count = 0;
        let maxCap = 2;
        let v = true;
        const url2 = `http://localhost:3000/booking/getAllMovieTime/${movie}/${date}/${time}`;
        axios.get(url2)
            .then(res => {
                console.log(res);
                for (const bookings of res.data) {
                    console.log("seats", bookings.seats);
                    count += bookings.seats;
                }
                if (count + seats > maxCap) {
                    alert(`There are not enough seats; there are ${maxCap - count} seats available.`);
                    v = false;

                } else if (remSeats !== 0) {
                    alert(`Seats do not match tickets.`);

                } else {
                    axios.post(url, formdata)
                        .then(res => {
                            console.log(res);
                        }).catch("ERROR POST");
                }
            }).catch("ERROR GET");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bookingname" >Your Name: </label>
            <input type="text" id="bookingname" value={username} onChange={e => setUsername(e.target.value)} />
            <label htmlFor="bookingmovie" value="Select your Movie">Movie: </label>
            <select type="select" id="bookingmovie" value={movie} onChange={e => setMovie(e.target.value)}>
                <option value="" selected disabled hidden>Pick a movie</option>
                <option value="Morbin" >Morbin</option>
            </select>
            <label htmlFor="bookingdate" >Date and Time: </label>
            <input type="date" id="bookingdate" value={date} onChange={e => setDate(e.target.value)} />
            <label htmlFor="bookingtime" >Time: </label>
            <select id="bookingtime" value={time} onChange={e => setTime(e.target.value)}>
                <option value="" selected disabled hidden>Pick a time</option>
                {
                    times.map((t, i) => {
                        return <option value={t} key={i}>{t}</option>
                    })
                }
            </select>
            <label htmlFor="bookingseats" value="Seats:">No of Seats: </label>
            <input type="number" id="bookingseats" value={seats} onChange={e => setSeats(parseInt(e.target.value))} />
            <label htmlFor="bookingadult" value="Adult Tickets:">Adult Tickets: </label>
            <input type="number" id="bookingadult" value={adulttickets} onChange={e => setAdult(parseInt(e.target.value))} />
            <label htmlFor="bookingchild" value="Child Tickets:">Child Tickets: </label>
            <input type="number" id="bookingchild" value={childtickets} onChange={e => setChild(parseInt(e.target.value))} />
            <label htmlFor="bookingconcession" value="Concessions: ">Concessions: </label>
            <input type="number" id="bookingconcession" value={concessions} onChange={e => setConcession(parseInt(e.target.value))} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BookingForm;