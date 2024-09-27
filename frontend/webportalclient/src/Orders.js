import logo from './logo.svg';
import './Orders.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Orders() {
  const name = useSelector((state) => state.user.name);
  const userId = useSelector((state) => state.user.userId);
  const [orderHistory, setOrderHistory] = useState('');

  useEffect(() => {
    async function getOrderHistory(){
      try{
        const serverResponse = await fetch(`http://localhost:3000/order?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
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
    <div className="Orders">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}! Below is your order history.
        </p>
        <table>
          <thead>
            <tr>
              <th className='tableHeader'>Order ID</th>
              <th className='tableHeader'>Product Name</th>
              <th className='tableHeader'>Quantity</th>
              <th className='tableHeader'>Order Total</th>
              <th className='tableHeader'>Payment Status</th>
              <th className='tableHeader'>Tracking Number</th>
              <th className='tableHeader'>Shipping Status</th>
            </tr>
          </thead>

          <tbody>
            {/* {orderHistory && orderHistory.length > 0 ? (
              orderHistory.map((order) => (

              ))
              )
            } */}
          </tbody>

        </table>
      </header>
    </div>
  );
}

export default Orders;
