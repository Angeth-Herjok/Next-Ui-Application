const Menu = () => {
    return (
        
           <div>

<div className="bg-gray-100">
  <div className="mx-auto p-10 max-w-6xl">
    <div className="flex justify-between items-center p-5 bg-gray-300 mb-10">
      <div className="flex-1">
        <p className="text-4xl font-bold">Our <span className="font-bold text-salmon">Regular</span> Menu</p>
        <p className="mt-3">These Are Our Regular Menus. You Can Order Anything You Like.</p>
      </div>
      <div>
        <button className="bg-salmon text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-salmon-dark">See All</button>
      </div>
    </div>

    <div className="flex justify-between gap-4 mb-16">
      <div className="flex-1">
        <div className="bg-gray-300 p-4 rounded-lg">
          <img src="Images/noddle.png" alt="" className="w-60 mx-auto mb-2" />
          <p className="font-semibold">Chicken Burger</p>
          <p>(160)</p>
          <p>$3.50</p>
          <button className="bg-salmon text-white px-4 py-2 rounded-lg text-sm mt-2 hover:bg-salmon-dark">Buy Now</button>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-gray-300 p-4 rounded-lg">
          <img src="Images/chickenpizza.png" alt="" className="w-60 mx-auto mb-2" />
          <p className="font-semibold">Chicken Pizza</p>
          <p>(142)</p>
          <p>$3.50</p>
          <button className="bg-salmon text-white px-4 py-2 rounded-lg text-sm mt-2 hover:bg-salmon-dark">Buy Now</button>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-gray-300 p-4 rounded-lg">
          <img src="Images/chicken_fry.png" alt="" className="w-60 mx-auto mb-2" />
          <p className="font-semibold">Chicken Fry</p>
          <p>(125)</p>
          <p>$5.00</p>
          <button className="bg-salmon text-white px-4 py-2 rounded-lg text-sm mt-2 hover:bg-salmon-dark">Buy Now</button>
        </div>
      </div>
    </div>

    <div className="flex justify-between gap-4">
      <div className="flex-1">
        <div className="bg-gray-300 p-4 rounded-lg">
          <img src="Images/grillsandwich.png" alt="" className="w-60 mx-auto mb-2" />
          <p className="font-semibold">Grill Sandwich</p>
          <p>(112)</p>
          <p>$4.80</p>
          <button className="bg-salmon text-white px-4 py-2 rounded-lg text-sm mt-2 hover:bg-salmon-dark">Buy Now</button>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-gray-300 p-4 rounded-lg">
          <img src="Images/BeefTacos.png" alt="" className="w-60 mx-auto mb-2" />
          <p className="font-semibold">Taco Troifi</p>
          <p>(152)</p>
          <p>$3.63</p>
          <button className="bg-salmon text-white px-4 py-2 rounded-lg text-sm mt-2 hover:bg-salmon-dark">Buy Now</button>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-gray-300 p-4 rounded-lg">
          <img src="Images/sandwich.png" alt="" className="w-60 mx-auto mb-2" />
          <p className="font-semibold">Noodle's Roman</p>
          <p>(163)</p>
          <p>$6.50</p>
          <button className="bg-salmon text-white px-4 py-2 rounded-lg text-sm mt-2 hover:bg-salmon-dark">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</div>


           </div>


        );
    };
    
export default Menu;