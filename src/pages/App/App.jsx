import {useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const[user, setUser] = useState(null)
  return (
    <main className="App">
      { user ?
        <NewOrderPage/>
        :
        <AuthPage />
      }
    </main>
  );
}


