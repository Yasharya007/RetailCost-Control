import CustomerPage from "./pages/CustomerPage.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import GeographyPage from "./pages/GeographyPage.jsx"

function App() {
  return (
    <>
      <div id="dashboard" className="flex"> 
        {/* <CustomerPage/> */}
        {/* <ProductPage/> */}
        <GeographyPage/>
      </div>
    </>
  )
}

export default App
