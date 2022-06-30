import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import AboutSBD from './aboutsbdlayout';
import ListingsGalleryLayout from './listingsgallerylayout';
import NewReleasesGalleryLayout from './newreleasesgallerylayout';
import ScreensLayout from './screenslayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <AboutSBD />
    <ListingsGalleryLayout />
    <NewReleasesGalleryLayout />
    <ScreensLayout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
