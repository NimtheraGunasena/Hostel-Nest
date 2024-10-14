import React, { useState, useEffect } from 'react';

const FoodOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/pickup/orderHistory');
      if (!response.ok) {
        throw new Error('Failed to fetch order history');
      }
      const data = await response.json();
      if (data.success) {
        setOrderHistory(data.orders);
      } else {
        throw new Error(data.message || 'Failed to fetch order history');
      }
    } catch (error) {
      console.error('Error fetching order history:', error);
      // Optionally, you can set an error state here to display to the user
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto mt-36 p-4">
        <h1 className="text-2xl font-bold mb-4">Food Order History</h1>
        {orderHistory.length === 0 ? (
          <p>No order history available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Username</th>
                  <th className="border border-gray-300 p-2">Student ID</th>
                  <th className="border border-gray-300 p-2">Email</th>
                  <th className="border border-gray-300 p-2">Room Number</th>
                  <th className="border border-gray-300 p-2">Floor Number</th>
                  <th className="border border-gray-300 p-2">Pickup Time</th>
                  {/* <th className="border border-gray-300 p-2">Total Amount</th> */}
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => (
                  <tr key={order._id}>
                    <td className="border border-gray-300 p-2">{order.username}</td>
                    <td className="border border-gray-300 p-2">{order.studentId}</td>
                    <td className="border border-gray-300 p-2">{order.email}</td>
                    <td className="border border-gray-300 p-2">{order.roomNumber}</td>
                    <td className="border border-gray-300 p-2">{order.floorNumber}</td>
                    <td className="border border-gray-300 p-2">{order.pickupTime}</td>
                    {/* <td className="border border-gray-300 p-2">Rs.{order.totalAmount.toFixed(2)}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <footer className="bg-gray-200 p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FoodOrderHistory;
