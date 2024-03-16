import './styles/index.css';
import './styles/navMenu.css';
import './styles/gallery.css';
import './styles/lightbox.css';
import './styles/home.css';
import './styles/footer.css';
import './styles/contact.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NavigationProvider } from './context/navigation';
import { GlobalStatesProvider } from './context/globalStates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStatesProvider>
      <NavigationProvider>
          <App/>
      </NavigationProvider>
    </GlobalStatesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
