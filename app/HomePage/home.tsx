const Menu = () => {
    return (
        <div>

        <div className="bg-gray-100">
  <div className="mx-auto p-10 max-w-6xl">
    <div className="flex justify-between items-center gap-0">
      <div className="flex flex-col gap-8 flex-1 items-start">
        <div className="text-center">
          <p className="text-4xl font-bold text-salmon">All Fast Food is Available at Foodle.</p>
        </div>
        <div className="flex items-center text-center">
          <img src="Images/person.png" alt="" className="max-w-xs rounded-full" />
          <p className="text-sm text-gray-600">We Are Just A Click Away When You Crave For Delicious Fast Food</p>
        </div>
        <div className="flex justify-center items-center gap-4 text-center">
          <button className="bg-salmon text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-salmon-dark">Buy Now</button>
          <p className="text-sm">How To Order</p>
        </div>
      </div>
      <div className="w-1/2">
        <img src="Images/Sandwich-rem.png" alt="sandwich" className="max-w-full" />
      </div>
    </div>
  </div>
</div>
<div className="mx-auto p-10 max-w-6xl">
  <div className="flex justify-center gap-8 mb-10">
    <div className="text-center flex-1 shadow-md p-6 bg-white rounded-lg">
      <h1 className="text-xl font-semibold mb-3">Fast Delivery</h1>
      <p className="text-gray-600">The Food Will Be Delivered To Your Home Within 1-2 Hours Of Your Ordering.</p>
    </div>
    <div className="text-center flex-1 shadow-md p-6 bg-white rounded-lg">
      <h1 className="text-xl font-semibold mb-3">Fresh Food</h1>
      <p className="text-gray-600">Your Food Will Be Delivered 100% Fresh To Your Home. We Do Not Deliver Stale Food.</p>
    </div>
    <div className="text-center flex-1 shadow-md p-6 bg-white rounded-lg">
      <h1 className="text-xl font-semibold mb-3">Free Delivery</h1>
      <p className="text-gray-600">Your Food Delivery Is Absolutely Free. No Cost. Just Order And Enjoy.</p>
    </div>
  </div>
</div>

</div>


        );
    };
    
export default Menu;