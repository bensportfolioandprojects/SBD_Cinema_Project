import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScreensLayout from './screenslayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav><NavBar/></nav>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage/>}/>
          <Route path='listingsgallery' element={<Listings/>}/>
          <Route path='newreleases' element={<NewReleases/>}/>
          <Route path='OpeningTimes' element={<OpeningTimes/>}/>
          <Route path='screenslayout' element={<Screens/>}/>
          <Route path='gettingthere' element={<GettingThere/>}/>
          <Route path='ticketbooking' element={<TicketBookings/>}/>
          <Route path='payment' element={<Payment/>}/>
          <Route path='PlacesToGo' element={<PlacesToGo/>}/>
          <Route path='classifications' element={<Classifications/>}/>
          <Route path='about' element={<AboutSBD/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
