import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

// Todo responsive desde md:[760px], lg:[1024px] y xl:[1280px]
function App() {
  return (
    <div className="font-[Manrope]">
      <div className="md:block hidden">
        <Navbar />
        <Hero />
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="md:hidden flex flex-col justify-center items-center h-dvh text-lg p-4 text-center gap-2 max-w-[415px]">
          <span className="block font-bold">¡Lo siento!</span>
          <span className="block">Mi portafolio solo es visible en dispositivos tales como tablets, laptops y monitores.</span>
          <span className="block text-[#FCA331]">Si desea visualizar mi portafolio, entre nuevamente en una laptop o computadora.</span>
        </div>
      </div>
    </div>
  )
}

export default App
