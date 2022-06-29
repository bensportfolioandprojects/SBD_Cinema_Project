import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

=======
import './index.css';
// import App from './App';
import AboutSBD from './aboutsbdlayout';
import ListingsGalleryLayout from './listingsgallerylayout';
import reportWebVitals from './reportWebVitals';
import NewReleasesGalleryLayout from './newreleasesgallerylayout';
import ScreensLayout from './screenslayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
>>>>>>> dev

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
    {/* <ScreensLayout /> */}
=======
    {/* <App /> */}

    <AboutSBD />
    <ListingsGalleryLayout />
    <NewReleasesGalleryLayout />
    <ScreensLayout />
>>>>>>> dev
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
