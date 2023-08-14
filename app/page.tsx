import Image from 'next/image'
import Navigation from './Navigation/navbar'
import Footer from './Footer/footer'
import HomePage from './HomePage/home'
import Menu from './Menu/menu'
import Service from './Service/service'
import Discount from './Discount/discount'



export default function Home() {
  return (
    <div>

    <Navigation/>
    <HomePage/>
    <Service/>
    <Menu/>
    <Discount/>   
     <Footer/>


    </div>
  )
}
