import CustomerPage from "./pages/CustomerPage.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import GeographyPage from "./pages/GeographyPage.jsx"
import OverviewPage from "./pages/OverviewPage.jsx"
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
      <div id="dashboard" className="flex"> 
      <Routes>
        <Route path="/" element={<ProductPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/customer" element={<CustomerPage/>}/>
        <Route path="/geography" element={<GeographyPage/>}/>
        <Route path="/overview" element={<OverviewPage/>}/>
      </Routes>
        {/* <CustomerPage/> */}
        {/* <ProductPage/> */}
        {/* <GeographyPage/> */}
      </div>
    </>
  )
}

export default App
