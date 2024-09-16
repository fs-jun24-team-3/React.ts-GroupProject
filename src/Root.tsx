import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter } from 'react-router-dom';
import App from './App';

export const Root = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </StrictMode>
  );
};
