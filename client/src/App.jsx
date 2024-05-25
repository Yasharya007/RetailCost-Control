import { Route, Routes } from "react-router-dom";
import CustomerPage from "./pages/CustomerPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import GeographyPage from "./pages/GeographyPage.jsx";
import OverviewPage from "./pages/OverviewPage.jsx";
import DailyPage from "./pages/DailyPage.jsx";
import TransactionPage from "./pages/TransactionPage.jsx";
import Monthlypage from "./pages/MonthlyPage.jsx";
import BreakDownPage from "./pages/BreakDownPage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import AddTransactionPage from "./pages/AddTransactionPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <>
      <div id="dashboard" className="flex">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/geography" element={<GeographyPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/daily" element={<DailyPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/monthly" element={<Monthlypage />} />
          <Route path="/breakdown" element={<BreakDownPage />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/addtransaction" element={<AddTransactionPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
