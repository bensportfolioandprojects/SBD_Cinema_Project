import HomePage from "./components/homepage/Page"
import logo from './logo.svg';
import BookingPage from './components/booking/Page'
import './App.css';
import GettingThere from './components/getting-there/GettingThere';
import './aboutsbd';
import Classifications from './Classifications';
import PlacesToGo from './PlacesToGo'

function App() {
  return (
    <div className="App">

      <GettingThere/>
      <Classifications/>
      <PlacesToGo/>      
    <HomePage/>
        <BookingPage/>
    </div>
  );
}

export default App;
