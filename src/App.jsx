import { Body } from "../src/Components/body"
import { Footer } from "./Components/Footer"
import { Header } from "../Components/Header"

function App() {

  return (
    <>
    <div className="	bg-amber-50 min-h-full px-6 py-3 flex flex-col gap-16">
     <Header/>
     <Body/>
     <Footer/>
    </div>
    </>
  )
}

export default App
