import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/redux-store/redux-store';
import './styles/index.scss';
import ErrorBoundary from 'components/app/ErrorBoundary/ErrorBoundary';
import { inculdeYandexMetric } from 'components/libs/utils/metrics';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App/>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);

if (process.env.REACT_APP_METRIC === 'yes') {
  inculdeYandexMetric()
}