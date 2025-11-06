
import Header from "./components/header"
import Hero from "./components/Hero"

import Infosec from "./components/Infosec"
import Footer from "./components/Footer"


import Citybuy from "./components/Citybuy"
import CustomerReviews from "./components/Customer"

function Home() {
  return (
    <div>
     {/* header */}
     <Header/>

     {/* hero */}
     <Hero/>

     <Citybuy/>
     <Infosec/>
     <CustomerReviews/>
      <Footer/>
      
    </div>
  )
}

export default Home