import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

export default function OrderSuccess() {
  const [cardNumber, setCardNumber] = useState('2412 7512 3412 3456');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">AceCoin<span className="text-blue-600">Pay</span></h2>
          <div className="flex items-center space-x-1">
            <span className="text-gray-900 bg-black px-2 py-1 rounded text-white">0</span>
            <span className="text-gray-900 bg-black px-2 py-1 rounded text-white">1</span>
            <span className="text-gray-900 bg-black px-2 py-1 rounded text-white">9</span>
          </div>
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Card Number</label>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-50">
            <img
              src="https://img.icons8.com/color/48/mastercard.png"
              alt="Card Logo"
              className="w-8 h-8 mr-2"
            />
            <input
              type="text"
              value={cardNumber}
              readOnly
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            <FaEdit className="text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* CVV Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">CVV Number</label>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-50">
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Expiry Date */}
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-600">Expiry Month</label>
            <input
              type="text"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              placeholder="MM"
              className="w-full border rounded-lg px-3 py-2 mt-1 bg-gray-50 outline-none text-gray-700"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-600">Expiry Year</label>
            <input
              type="text"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              placeholder="YY"
              className="w-full border rounded-lg px-3 py-2 mt-1 bg-gray-50 outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 bg-gray-50">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Pay Now Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Pay Now
        </button>
      </div>
    </div>
  );
}
