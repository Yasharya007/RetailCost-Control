import CustomerPage from "./pages/CustomerPage"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <>
      <div id="dashboard" className="flex"> 
        <CustomerPage/>
        {/* <ProductPage/> */}
      </div>
    </>
  )
}

export default App
