// import Link from 'next/link';

const Navigation = () => {
  return (



    <div className="bg-white-800">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-pink text-2xl font-semibold">Foodle</h1>
        <ul className="flex space-x-4">
          <li><a href="/HomePage" className="text-black hover:text-gray-300">Home</a></li>
          <li><a href="/FoodOffers" className="text-black hover:text-gray-300">Offer</a></li>
          <li><a href="/Service" className="text-black hover:text-gray-300">Service</a></li>
          <li><a href="/Menu" className="text-black hover:text-gray-300">Menu</a></li>
          <li><a href="/AboutPage" className="text-black hover:text-gray-300">About Us</a></li>
          <li><a href="/LoginPage" className="text-black hover:text-gray-300">Login</a></li>
          <li><button className="bg-pink-500 text-black px-4 py-2 rounded hover:bg-black-600">Sign Up</button></li>
        </ul>
      </nav>
    </div>




  );
};

export default Navigation;
