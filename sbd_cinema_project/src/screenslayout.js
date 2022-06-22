import NavBar from './components/NavBar';
import ScreensBody from './components/screens/ScreensBody';
import ScreensCarousel from './components/screens/ScreensCarousel';
import ScreensHeader from './components/screens/ScreensHeader';


export default function ScreensLayout() {
  return (
    <div className="app--container">
    
    <NavBar />
    <ScreensHeader />
    <ScreensCarousel />
    <ScreensBody />
    </div>
  );

}