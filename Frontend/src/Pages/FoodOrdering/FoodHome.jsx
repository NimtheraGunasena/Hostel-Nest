import React from 'react';
import { Link } from 'react-router-dom';

const FoodHome = () => {
  const foodCategories = [
    { name: 'BREAKFAST', href: 'breakfirstmenu', image: 'https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg' },
    { name: 'BEVERAGES', href: 'beveragemenu', image: 'https://buffetmap.com/wp-content/uploads/2022/08/m.facebook.combuffet101-bm1658-Image-1.jpg' },
    { name: 'LUNCH', href: 'lunchmenu', image: 'https://i.pinimg.com/564x/36/8a/1c/368a1c892a4b60d5e674c309a30b552a.jpg' },
    { name: 'DINNER', href: 'dinnermenu', image: 'https://i.pinimg.com/564x/38/b7/79/38b7798fac310200270b0313a125aa71.jpg' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg bg-slate-100"
        // style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.RSC6kWWsj0exBlPhTDWYzAHaEK?rs=1&pid=ImgDetMain')" }}
      />

      {/* Main Content Section */}
      <div className="relative z-10 p-6">
        {/* Main Content */}
        <div className="text-center mb-10">
          <h2 className="text-2xl mt-20 font-bold">Hello himaya!</h2>
          <p className="text-2xl font-semibold">What do you want to eat.......</p>
        </div>

        {/* Food Categories */}
        <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
          {foodCategories.map((category, index) => (
            <a key={category.name} href={category.href}>
              <button
                className={`w-96 ${index % 2 === 0 ? '-ml-40' : ''} flex items-center justify-center border border-black py-20 rounded-md shadow-md hover:shadow-lg bg-no-repeat bg-cover`}
                style={{ backgroundImage: `url('${category.image}')` }}
              >
                <span className="text-2xl font-extrabold">{category.name}</span>
              </button>
            </a>
          ))}
        </div>
        
        {/* Login Button */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <Link to="/foodadminlogin">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Food Admin Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodHome;
