import MenuBar from "./components/MenuBar/MenuBar"
import Main from "./components/Main/Main"
import CustomerPage from "./pages/CustomerPage"

function App() {
  return (
    <>
      <div id="dashboard" className="flex"> 
        <CustomerPage/>
      </div>
    </>
  )
}

export default App
