import logo from './logo.svg';
import './Orders.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Orders() {
  const name = useSelector((state) => state.user.name);
  const userId = useSelector((state) => state.user.userId);
  const [orderHistory, setOrderHistory] = useState([]);

  console.log(name);
  console.log(userId);

  useEffect(() => {
    async function getOrderHistory(){
      try{
        const serverResponse = await fetch(`http://localhost:3000/orders?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const orderHistoryData = await serverResponse.json();
        console.log("Fetched order data:", orderHistoryData);

        if(orderHistoryData && orderHistoryData.success){
          if(Array.isArray(orderHistoryData.orders)){
            setOrderHistory(orderHistoryData.orders);
          }
          else{
            setOrderHistory([orderHistoryData.orders]);
          }
          console.log("orderHistory length:", orderHistory.length);
        }
        else{
          alert(`An error occured retrieving the user's order history!`);
        }
      }
      catch(error){
        console.log(error);
      }
    }

    getOrderHistory();
  }, [userId]);

  return (
    <div className="Orders">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}! Below is your order history.
        </p>
        { orderHistory.length > 0 ? (
                  <table className='tableBorders'>
                  <thead>
                    <tr>
                      <th className='tableHeader'> Order ID </th>
                      <th className='tableHeader'> Product Name </th>
                      <th className='tableHeader'> Quantity </th>
                      <th className='tableHeader'> Order Total </th>
                      <th className='tableHeader'> Payment Status </th>
                      <th className='tableHeader'> Tracking Number </th>
                      <th className='tableHeader'> Shipping Status </th>
                    </tr>
                  </thead>
        
                  <tbody>
                    {orderHistory.map((order) => (
                        <tr key={order.orderId}>
                          <td className='tableData'> {order.orderId} </td>
                          <td className='tableData'> {order.productName} </td>
                          <td className='tableData'> {order.quantity} </td>
                          <td className='tableData'> ${order.orderTotal} </td>
                          <td className='tableData'> {order.paymentStatus} </td>
                          <td className='tableData'> {order.trackingNumber} </td>
                          <td className='tableData'> {order.shippingStatus} </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
        ) : (
          <p>No orders found.</p>
        )

        }

      </header>
    </div>
  );
}

export default Orders;
