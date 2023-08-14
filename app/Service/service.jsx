const Service = () => {
    return (
        
        <div className="service-container text-center my-10">
        <div className="heading flex justify-between items-center">
          <div className="firstheading">
            <h1 className="text-3xl font-bold">Best <span className="text-salmon">Delivered</span><br />Categories</h1>
          </div>
          <div className="secondheading">
            <p className="text-lg text-gray-600 mt-2">Here Are Some of our Best Distributed Categories. If You Want You Can Order From Here</p>
          </div>
        </div>
      
        <div className="serviceimages flex justify-center items-center flex-wrap gap-8 mt-8">
          <div className="serviceimage flex-1 p-4 text-center">
            <img src="Images/food-burger.png" alt="pizza" className="max-h-40 w-full mx-auto" />
            <div className="orderall">
              <p className="text-lg font-semibold">Chicken Burger</p>
              <p className="order text-salmon">Order Now</p>
            </div>
          </div>
      
          <div className="serviceimage flex-1 p-4 text-center">
            <img src="Images/burger.png" alt="Burgers" className="max-h-40 w-full mx-auto" />
            <div className="orderall">
              <p className="text-lg font-semibold">Chicken Pizza</p>
              <p className="order text-salmon">Order Now</p>
            </div>
          </div>
      
          <div className="serviceimage flex-1 p-4 text-center">
            <img src="Images/fries.png" alt="fry" className="max-h-40 w-full mx-auto" />
            <div className="orderall">
              <p className="text-lg font-semibold">French Fries</p>
              <p className="order text-salmon">Order Now</p>
            </div>
          </div>
        </div>
      </div>
      


        );
    };
    
export default Service;