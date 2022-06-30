import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSBDLayout from './aboutsbdlayout';
import ListingsGalleryLayout from './listingsgallerylayout';
import NewReleasesGalleryLayout from './newreleasesgallerylayout';
import ScreensLayout from './screenslayout';
import OpeningTimes from './OpeningTimes';
import GettingThere from './components/getting-there/GettingThere';
import TicketBookings from './components/booking/BookingPage';
import Payment from './components/payment/PaymentDetails';
import DiscussionBoard from './components/forum/DiscussionPage';
import HomePage from './components/homepage/HomePage';
import PlacesToGo from './PlacesToGo';
import Classifications from './Classifications';
import ContactUs from './ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav><NavBar/></nav>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage/>}/>
          <Route path='listingsgallery' element={<ListingsGalleryLayout/>}/>
          <Route path='newreleases' element={<NewReleasesGalleryLayout/>}/>
          <Route path='OpeningTimes' element={<OpeningTimes/>}/>
          <Route path='screens' element={<ScreensLayout/>}/>
          <Route path='gettingthere' element={<GettingThere/>}/>
          <Route path='ticketbooking' element={<TicketBookings/>}/>
          <Route path='payment' element={<Payment/>}/>
          <Route path='discussionboard' element={<DiscussionBoard/>}/>
          <Route path='PlacesToGo' element={<PlacesToGo/>}/>
          <Route path='ContactUs' element={<ContactUs/>}/>
          <Route path='classifications' element={<Classifications/>}/>
          <Route path='about' element={<AboutSBDLayout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
