import MenuBar from "./components/MenuBar/MenuBar"
import Main from "./components/Main/Main"

function App() {
  return (
    <>
      <div id="dashboard" className="flex"> 
        <MenuBar/>
        <Main/>
      </div>
    </>
  )
}

export default App
