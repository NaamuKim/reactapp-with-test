import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import ErrorBanner from '../../components/ErrorBanner';
import { OrderContext } from '../../contexts/OrderContext';

function CompletePage({ setStep }) {
  const [orderDatas, , resetOrderDatas] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleClick = () => {
    resetOrderDatas();
    setStep(0);
  };

  useEffect(() => {
    orderCompleted(orderDatas);
  }, [orderDatas]);

  const orderCompleted = async () => {
    try {
      let response = await axios.post('http://localhost:5000/order', orderDatas);
      setOrderHistory(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message='에러가 발생했습니다'></ErrorBanner>;
  }

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  if (isLoading) {
    return <div>loading...</div>;
  } else {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>주문이 성공했습니다.</h2>
        <h3>지금까지 모든 주문 </h3>
        <table style={{ margin: 'auto' }}>
          <tbody>
            <tr>
              <th>주문 번호</th>
              <th>주문 가격</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <button onClick={handleClick}>첫 페이지로</button>
      </div>
    );
  }
}

export default CompletePage;
