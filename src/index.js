import React from 'react';
import ReactDOM from 'react-dom';
import ThemeWrapper from './styles/ThemeWrapper';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <ThemeWrapper>
    <App />
  </ThemeWrapper>
), document.getElementById('root'));
registerServiceWorker();
