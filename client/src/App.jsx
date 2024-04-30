import CustomerPage from "./pages/CustomerPage.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import GeographyPage from "./pages/GeographyPage.jsx"
import OverviewPage from "./pages/OverviewPage.jsx"
import DailyPage from "./pages/DailyPage.jsx"
import TransactionPage from "./pages/TransactionPage.jsx"
import { Route,Routes } from "react-router-dom"
import Monthlypage from "./pages/MonthlyPage.jsx"

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
        <Route path="/daily" element={<DailyPage/>}/>
        <Route path="/transaction" element={<TransactionPage/>}/>
        <Route path="/monthly" element={<Monthlypage/>}/>
      </Routes>
        {/* <CustomerPage/> */}
        {/* <ProductPage/> */}
        {/* <GeographyPage/> */}
      </div>
    </>
  )
}

export default App
