import Navbar from "./components/navbar/Navbar"
import Background from "./components/background/Background"

function App() {
  return (
    <div className="text-white">
      <Background>
        <Navbar/>
        <h1 className="mx-auto font-mono text-3xl text-center mt-20 font-bold">generate your ideas to build for tommorow!</h1>
        <p className="text-center text-xl mt-10">use AI to help track and organize your ideas</p>
      </Background>  
    </div>
  )
}

export default App
