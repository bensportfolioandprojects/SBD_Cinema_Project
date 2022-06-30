import HomePage from "./components/homepage/Page"
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
    </div>
  );
}

export default App;
