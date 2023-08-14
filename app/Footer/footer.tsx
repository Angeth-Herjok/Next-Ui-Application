const Footer = () => {
    return (
     
     
            <footer className="bg-pink-800 text-white py-8">
              <div className="flex justify-center gap-8 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="w-1/4">
                  <h1 className="text-xl font-semibold">Fooodish</h1>
                  <p className="text-sm">Continue Foodish 2023 all rights reserved</p>
                  <h1 className="text-xl mt-4">Follow Us On</h1>
                  {/* <p><ion-icon name="logo-pinterest"></ion-icon></p>
                      <p><ion-icon name="logo-instagram"></ion-icon></p>
                      <p><ion-icon name="logo-twitter"></ion-icon></p>
                      <p><ion-icon name="logo-facebook"></ion-icon></p> */}
                </div>
        
                <div className="w-1/4">
                  <h1 className="text-xl font-semibold">Menu</h1>
                  <p>Home</p>
                  <p>Offers</p>
                  <p>Service</p>
                  <p>About Us</p>
                </div>
        
                <div className="w-1/4">
                  <h1 className="text-xl font-semibold">Information</h1>
                  <p>Quality</p>
                  <p>Make a Choice</p>
                  <p>Salad With Vegetable</p>
                  <p>Fast Delivery</p>
                  <p>Subscribe</p>
                </div>
        
                <div className="w-1/4">
                  <h1 className="text-xl font-semibold">Contact</h1>
                  <p>+123 456 789</p>
                  <p>Explore</p>
                  <p>Info@Foodish.Com</p>
                  <p>1245, New York, USA</p>
                </div>
              </div>
            </footer>
          );
        };
        
  export default Footer;