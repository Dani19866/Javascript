// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

// Base
import Card from "./components/Card"

// Inside
import CardInfo from "./components/CardInfo"
import CardExperience from "./components/CardExperience"
import CardProject from "./components/CardProject"

// JSON
import dutties from "./data/dutties.json"
import experiences from "./data/experience.json"
import projects from "./data/projects.json"
import projects2 from "./data/projects2.json"

// Todo responsive desde md:[760px], lg:[1024px] y xl:[1280px]
function App() {
  return (
    <div className="font-[Manrope]">
      <Navbar />

      <div className="py-5 px-10 flex flex-col gap-4" id="home">
        <Hero />
        <Card id="dutties" title="¿Qué puedo ofrecerle a tu empresa?" classNameTitle="text-center" className='p-4 flex flex-col gap-y-12 justify-center items-center pb-10'>
          {
            dutties.map((duty) => (
              <CardInfo
                key={duty.id}
                duty={duty}
              />
            ))
          }
        </Card>
        <Card id="experience" title="Experiencia" className='p-4 flex flex-col gap-y-12 justify-center items-center pb-10'>
          <div className="flex flex-row gap-x-6 xl:gap-x-16">
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
        <Card id="projects" title="Proyectos" className="p-4 flex flex-col gap-y-3 justify-center items-center pb-10">
          <div className="flex flex-row gap-3 flex-wrap w-full justify-center items-center mt-5">
            {
              projects.map((project, index) => (
                <CardProject
                  key={index}
                  project={project}
                />
              ))
            }
          </div>
          <div className="flex flex-row gap-3 flex-wrap w-full justify-center items-center">
            {
              projects2.map((project, index) => (
                <CardProject
                  key={index}
                  project={project}
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
