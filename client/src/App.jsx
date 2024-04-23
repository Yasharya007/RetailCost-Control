import MenuBar from "./components/MenuBar/MenuBar"
import Main from "./components/Main/Main"
import Product from "./components/Product/Product.jsx"

function App() {
  return (
    <>
      <div id="dashboard" className="flex"> 
        <MenuBar/>
        <Product/>
      </div>
    </>
  )
}

export default App
