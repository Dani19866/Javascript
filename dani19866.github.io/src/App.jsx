import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"


// Todo responsive desde md:[760px], lg:[1024px] y xl:[1280px]
function App() {
  return (
    <div className="font-[Manrope]">
      <Navbar />

      <div className="py-5 px-10 flex flex-col gap-4">
        <Hero />
      </div>

      <Footer />
    </div>
  )
}

export default App
