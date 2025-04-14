import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Card from "./components/Card"
import CardInfo from "./components/CardInfo"
import CardExperience from "./components/CardExperience"

// JSON
import dutties from "./data/dutties.json"
import experiences from "./data/experience.json"

// Todo responsive desde md:[760px], lg:[1024px] y xl:[1280px]
function App() {
  return (
    <div className="font-[Manrope]">
      <Navbar />

      <div className="py-5 px-10 flex flex-col gap-4">
        <Hero />
        <Card title="¿Qué puedo ofrecerle a tu empresa?" classNameTitle="text-center" className='relative p-4 flex flex-col gap-y-12 justify-center items-center pb-10'>
          {
            dutties.map((duty) => (
              <CardInfo
                key={duty.id}
                duty={duty}
              />
            ))
          }
        </Card>
        <Card title="Experiencia" className='relative p-4 flex flex-col gap-y-12 justify-center items-center pb-10'>
          <div className="flex flex-row gap-x-16">
            {
              experiences.map((experience) => (
                <CardExperience
                  key={experience.id}
                  experience={experience}
                />
              ))
            }
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  )
}

export default App
