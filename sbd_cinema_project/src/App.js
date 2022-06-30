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
    </div>
  );
}

export default App;
