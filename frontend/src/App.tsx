import Navbar from "./components/navbar/Navbar"
import Background from "./components/background/Background"
import TempWindow from "./Temp"

function App() {
  return (
    <div className="text-white">
      <Background>
        <Navbar/>
        <h1 className="mx-auto font-sans text-3xl text-center mt-20 font-bold">generate your ideas to build tomorrow!</h1>
        <p className="text-center text-xl mt-10 font-sans">use AI to help track and organize your ideas</p>
        <TempWindow></TempWindow>
      </Background>  
    </div>
  )
}

export default App
