import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-2jfu1rjwgj7b.frontegg.com',
  clientId: 'd9ae496e-9d20-4fdc-880b-db2c11b8654d'
};

const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <FronteggProvider 
  contextOptions={contextOptions} 
  hostedLoginBox={true}
  authOptions={authOptions}>
    <App />
  </FronteggProvider>,
)
