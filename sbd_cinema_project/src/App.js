import HomePage from "./components/homepage/Page"
import logo from './logo.svg';
import BookingPage from './components/booking/Page'
import { BRowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Page from './components/forum/Page';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <GettingThere/>
      <Classifications/>
      <PlacesToGo/>      
    <HomePage/>
        <BookingPage/>
      <Page/>
    </div>
  );
}

export default App;
