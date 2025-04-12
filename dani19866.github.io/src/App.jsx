import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import CardSmall from "./components/CardSmall"
import CardFifty from "./components/CardFifty"
import data from "./data/data.json"

// Todo responsive desde md:[760px], lg:[1024px] y xl:[1280px]
function App() {
  return (
    <div className="font-[Manrope]">

      {/* Tables, laptops & monitors */}
      <div className="md:block hidden">
        <Navbar />

        <div className="py-5 px-10 flex flex-col gap-4">
          <Hero />
          <Card />
          <CardSmall>
          {data.map((card, index) => ( // Cambiado data.cards por data directamente
              <CardFifty
                key={card.id}
                className={index % 2 === 0 ? "" : "rotate-180"}
                cardData={card}
              />
            ))}
          </CardSmall>
        </div>

      </div>

      {/* Mobile exception */}
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
