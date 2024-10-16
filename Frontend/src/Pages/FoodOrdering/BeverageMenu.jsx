import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// MenuItem Component
const MenuItem = React.memo(({ imgSrc, name, description, price, count, onIncrement, onDecrement }) => (
  <div className="flex items-center justify-between p-4 bg-sky-950 rounded-lg shadow">
    <div className="flex items-center space-x-4">
      <img src={imgSrc} alt={name} className="w-16 h-16 object-cover rounded-full" />
      <div>
        <h2 className="text-lg text-white font-semibold">{name}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <span className="text-lg font-bold text-white">Rs.{price}</span>
      <button type="button" className="bg-orange-400 text-white px-2 py-1 rounded" onClick={onIncrement}>+</button>
      <span className="text-white">{count}</span>
      <button type="button" className="bg-orange-400 text-white px-2 py-1 rounded" onClick={onDecrement}>-</button>
    </div>
  </div>
));

const BeverageMenu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFoods, setSelectedFoods] = useState({});
  const navigate = useNavigate();

  const fetchFoods = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3000/api/food/foodCategory/Beverages');
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      if (result.success) {
        setFoods(result.data);
      } else {
        throw new Error(result.message || 'Failed to fetch foods.');
      }
    } catch (error) {
      setError('Error fetching foods: ' + error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  const handleIncrement = useCallback((foodId) => {
    setSelectedFoods((prev) => ({
      ...prev,
      [foodId]: (prev[foodId] || 0) + 1,
    }));
  }, []);

  const handleDecrement = useCallback((foodId) => {
    setSelectedFoods((prev) => ({
      ...prev,
      [foodId]: Math.max((prev[foodId] || 0) - 1, 0),
    }));
  }, []);

  const handleSelect = useCallback(() => {
    navigate('/selectedfoods', { state: { selectedFoods } });
  }, [navigate, selectedFoods]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('https://th.bing.com/th/id/R.c09cc81e4e1dbd86b9b01001ae8e719f?rik=iPTv8bpRV7ZD1Q&pid=ImgRaw&r=0')" }}
    >
      <div className="max-w-5xl mx-auto mt-20 mb-20 bg-slate-950 bg-opacity-90 rounded-lg shadow-md p-6">
        <h1 className="text-4xl text-white text-center font-bold mb-6">BEVERAGES</h1>

        {/* Menu Items */}
        <div className="space-y-4">
          {foods.map((food) => (
            <MenuItem
              key={food._id}
              imgSrc={food.imageUrl || 'https://via.placeholder.com/150'}
              name={food.name}
              description={food.description}
              price={food.price}
              count={selectedFoods[food._id] || 0}
              onIncrement={() => handleIncrement(food._id)}
              onDecrement={() => handleDecrement(food._id)}
            />
          ))}
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={handleSelect}
            className="bg-green-500 w-44 text-black py-2 px-6 rounded-lg font-bold"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeverageMenu;
