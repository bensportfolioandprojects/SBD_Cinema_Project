import NavBar from './components/NavBar';
import ScreensBody from './components/screens/ScreensBody';
import ScreensHeader from './components/screens/ScreensHeader';


export default function ScreensLayout() {
  return (
    <div className="app--container">
    
    <NavBar />
    <ScreensHeader />
    <ScreensBody />
    </div>
  );

}