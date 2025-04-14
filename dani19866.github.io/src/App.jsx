import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Card from "./components/Card"
import CardInfo from "./components/CardInfo"
import dutties from "./data/dutties.json"

// Todo responsive desde md:[760px], lg:[1024px] y xl:[1280px]
function App() {
  return (
    <div className="font-[Manrope]">
      <Navbar />

      <div className="py-5 px-10 flex flex-col gap-4">
        <Hero />
        <Card title="¿Qué puedo ofrecerle a tu empresa?" classNameTitle="text-center" className='relative p-4 flex flex-col gap-y-12 justify-center items-center'>
          {
            dutties.map((duty) => (
              <CardInfo
                key={duty.id}
                duty={duty}
              />
            ))}
        </Card>
      </div>

      <Footer />
    </div>
  )
}

export default App
