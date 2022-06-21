import ScreensBody from './components/screens/ScreensBody';
import ScreensHeader from './components/screens/ScreensHeader';
import ScreensImage from './components/screens/ScreensImage';


export default function ScreensLayout() {
  return (
    <div className="app--container">
    <ScreensHeader />
    <ScreensImage />
    <ScreensBody />
    </div>
  );

}