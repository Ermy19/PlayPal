import { Navbar, Footer, Welcome, Services, Transaction } from './components';




const App = () => {


  return (  
    

<div>
      <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>

    
    
  )

}




export default App
