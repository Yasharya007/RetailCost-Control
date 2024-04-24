import MenuBar from "./components/MenuBar/MenuBar"
import Main from "./components/Main/Main"
import Product from "./components/Product/Product.jsx"
import Customer from "./components/Customers/Customer.jsx"

function App() {
  return (
    <>
      <div id="dashboard" className="flex"> 
        <MenuBar/>
        <Customer/>
      </div>
    </>
  )
}

export default App
