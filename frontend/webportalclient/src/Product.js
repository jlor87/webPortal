import logo from './logo.svg';
import './Orders.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProductDetails(){
      try{
        const serverResponse = await fetch(`http://localhost:3000/product/${productId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const data = await serverResponse.json();

        console.log(data.productDetails);

        if(data){
          setProductDetails(data.productDetails);
        }
        else{
          console.log("Error! Unable to retrieve product data from the server.")
        }

      }
      catch(error){
        console.log(error);
      }
    }

    getProductDetails();
  }, [productId]);
  
  const returnToOrders = () => {
    navigate('/orders');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Product Description
        </p>
        { productDetails &&
          <table className='tableBorders'>
            <tr>
              <th className='tableHeader'>Product ID</th>
              <th className='tableHeader'>Product Name</th>
              <th className='tableHeader'>Product Description</th>
              <th className='tableHeader'>Product Cost</th> 
            </tr>

            <tr>
              <td className='tableData'>{productDetails.productId}</td>
              <td className='tableData'>{productDetails.productName}</td>
              <td className='tableData'>{productDetails.productDescription}</td>
              <td className='tableData'>${productDetails.cost}</td>
            </tr>
          </table>
        }

        <p className='link' onClick={returnToOrders}>Return to Order History</p>
      </header>
    </div>
  );
}

export default Product;
