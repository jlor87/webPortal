import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [orderHistory, setOrderHistory] = useState('');

  useEffect(() => {
    async function getOrderHistory(){
      try{
        const serverResponse = await fetch('http://localhost:3000/order', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: {
            userId: userId
          }
        });
        const orderHistoryData = await serverResponse.json();
        console.log(orderHistoryData);
        if(orderHistoryData){
          setOrderHistory(orderHistoryData);
        }
        else{
          alert(`An error occured retrieving the user's order history!`);
        }
      }
      catch(error){
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! Below is your order history.
        </p>
        <table>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Order Total</th>
            <th>Payment Status</th>
            <th>Tracking Number</th>
            <th>Shipping Status</th>
          </tr>
          { orderHistory && orderHistory.length > 0

          }
        </table>
      </header>
    </div>
  );
}

export default App;
