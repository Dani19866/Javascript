import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Timeline } from "flowbite-react";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecundary from '../components/ButtonSecundary'
import CardSecundary from '../components/CardSecundary';
import CardPrimary from '../components/CardPrimary';
import CardProyect from '../components/CardProyect';

import me from "../assets/banner.png"
import idea from "../assets/idea.png"
import feedback from "../assets/feedback.png"
import puzzle from "../assets/puzzle.png"
import team from "../assets/team.png"

import relevants from "../data/relevants.json"
import experience from "../data/experience.json"

export default class index extends Component {
  render() {
    return (
      <>
        <Navbar />

        {/* First content: Responsive */}
        <div className='flex justify-center background_1'>
          <div className="md:w-auto xl:w-[1450px] ">

            <div className="md:grid md:grid-cols-2">
              <div className="w-full p-8 md:pt-28">

                {/* Content */}
                <div className='md:w-auto xl:w-[665px]'>

                  {/* Title */}
                  <h3 className="font-bold text-[60px]">
                    ¡Hola! me llamo
                    <br />
                    <span className="primary_text">Daniel De Oliveira</span>
                  </h3>

                  {/* Descripc */}
                  <p className='text-[16px] leading-7 pt-5 md:pt-0'>
                    <span className="font-semibold">Tengo 21 años</span> y me ubico en <span className="font-semibold">Caracas</span>, Dto. Capital.
                    Actualmente estoy estudiando <span className="font-semibold">ingeniería en sistemas</span> en la <span className="font-semibold">Universidad
                      Metropolitana de Caracas</span> en Venezuela y estoy cursando mis <span className="font-semibold">últimos trimestres</span> de la carrera.
                    Me especializo en la <span className="font-semibold">gerencia de proyectos</span> y en el <span className="font-semibold">desarrollo de aplicaciones</span> web
                    usando distintas tecnologías, servicios y lenguajes de programación para alcanzar los objetivos de forma rápida y adecuada.
                  </p>

                  <p className="text-xs pt-5">
                    Última modificación al portafolio: 28/04/2024.
                  </p>

                </div>

                {/* Button */}
                <div className="mt-10 flex justify-start gap-5">
                  <div className="inline-flex gap-4">
                    <Link to="/projects" className="hover:cursor-pointer">
                      <ButtonPrimary title="Mis proyectos" />
                    </Link>

                    <Link to="https://raw.githubusercontent.com/Dani19866/Dani19866.github.io/main/downloads/CVE%20-%20Daniel%20De%20Oliveira%20-%202024%20-%20July.pdf" download="CV-daniel-de-oliveira.pdf" className="hover:cursor-pointer">
                      <ButtonSecundary title="Descagar CV" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* Image */}
              <div className="relative hidden md:block">

                {/* SVG */}
                <div className="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" width="192" height="622" viewBox="97 0 192 622" fill="none">
                    <path d="M96 0H192L96 622H0L96 0Z" fill="#F9FAFB" />
                  </svg>
                </div>

                {/* Image */}
                <img src={me} className="w-full h-[622px]" />
              </div>
            </div>

          </div>
        </div>

        {/* Second content: Responsive */}
        <div className='flex background_2'>
          <div className="max-w-[1280px] mx-auto py-6">

            <Header head="Mis habilidades sociales y de comunicación" subtitle="HABILIDADES BLANDAS (SOFT SKILLS)" />

            {/* Contend */}
            <div>
              <div className="pt-10 md:grid md:grid-cols-2">

                {/* First column */}
                <div className='flex flex-col justify-between h-full flex-wrap'>

                  {/* Skill */}
                  <div className='flex p-4'>

                    <div>
                      <div className='flex gap-2 pb-2'>
                        <div className="h-8 w-8 primary_background rounded-md flex justify-center items-center">
                          <img src={idea} alt="idea" />
                        </div>
                        <h4 className="text-lg font-medium">
                          Creatividad
                        </h4>
                      </div>

                      <p className="text-[#6B7280] pr-4">
                        La creatividad juega un rol importante ya que permite crear productos originales y diferenciadores, por ende no sólo se necesita ser desarrollador para llevar a cabo un proyecto.
                      </p>
                    </div>

                  </div>

                  {/* Skill */}
                  <div className='flex p-4'>

                    <div>
                      <div className='flex gap-2 pb-2'>
                        <div className="h-8 w-8 primary_background rounded-md flex justify-center items-center">
                          <img src={puzzle} alt="puzzle" />
                        </div>
                        <h4 className="text-lg font-medium">
                          Capacidad para resolver problemas
                        </h4>
                      </div>

                      <p className="text-[#6B7280] pr-4">
                        En este ámbito siempre hay que estar preparado para enfrentarse a problemas conocidos y no conocidos sin embargo mis habilidades resolutivas me han ayudado a llegar a los objetivos.
                      </p>
                    </div>

                  </div>

                </div>

                {/* Second column */}
                <div className='flex flex-col justify-between h-full flex-wrap'>

                  {/* Skill */}
                  <div className='flex p-4'>
                    <div>
                      <div className='flex gap-2 pb-2'>
                        <div className="h-8 w-8 primary_background rounded-md flex justify-center items-center">
                          <img src={feedback} alt="feedback" />
                        </div>
                        <h4 className="text-lg font-medium">
                          Pensamiento crítico
                        </h4>
                      </div>

                      <p className="text-[#6B7280] pr-4">
                        Siempre me pregunto si lo que estoy haciendo lo podría hacer mejor o si hay una forma de hacerlo más rápido, ayuda mucho a desarrollar proyectos con las mejores prácticas y con la mejor organización.
                      </p>
                    </div>
                  </div>

                  {/* Skill */}
                  <div className='flex p-4'>
                    <div>
                      <div className='flex gap-2 pb-2'>
                        <div className="h-8 w-8 primary_background rounded-md flex justify-center items-center">
                          <img src={team} alt="team" />
                        </div>
                        <h4 className="text-lg font-medium">
                          Trabajo en equipo
                        </h4>
                      </div>

                      <p className="text-[#6B7280] pr-4">
                        Lo mejor de trabajar en estos ecosistemas es aprender o ayudar a las demás personas, el compañerismo y trabajo en equipo entabla muy buena relaciones para el futuro.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Third content: Responsive */}
        <div className='flex background_1'>
          <div className='py-6 mx-auto'>

            <Header head="Mis conocimientos técnicos y específicos" subtitle="HABILIDADES DURAS (HARD SKILLS)" />

            {/* Content */}
            <div className='pt-10'>

              <div className='flex flex-col gap-5 lg:flex-row'>

                <CardSecundary head="OpenUP" subtitle="GERENCIA DE PROYECTOS"
                  point1="Años de experiencia: 1."
                  point2="Metodología ligera."
                  point3="Ingeniería de requisitos."
                  point4="Creación de una SRS siguiendo el estándar IEEE 830."
                  point5="Construcción de pruebas funcionales y no funcionales"
                />

                <CardPrimary head="JAVA" subtitle="LENGUAJE DE PROGRAMACIÓN"
                  point1="Años de experiencia: 2 y medio."
                  point2="Años de experiencia con Spring: 1."
                  point3="Años de experiencia con JUnit: 1."
                  point4="Experiencia con programación POO."
                  point5="Patrones de diseño."
                  point6="Estructura de datos."
                  point7="Desarrollo web y desktop."
                  point8="Manejo y gestión de componentes de Java Swing."
                />

                <CardSecundary head="SQL" subtitle="LENGUAJE DE CONSULTA"
                  point1="Años de experiencia: 1."
                  point2="Nivel alto en DML/DDL/DCL."
                  point3="Análisis de datos en consultas anidadas."
                  point4="Recuperación de datos."
                  point5="Creación de Triggers y Funciones"
                />

              </div>

            </div>

          </div>
        </div>

        {/* Fourth content: Responsive */}
        <div className='flex background_2'>
          <div className='py-6 mx-auto'>

            <Header head="Proyectos - Trabajos - Ejercicios" subtitle="DEMOSTRACIONES MÁS RELEVANTES" />

            {/* Content */}
            <div className="pt-10 flex flex-col lg:flex-row justify-center items-center w-full gap-5">

              {relevants.map((data, index) => (
                <CardProyect
                  subtitle={data.subtitle}
                  title={data.title}
                  desc={data.desc}
                  tags={data.tags}
                  key={index}
                  alt="image"

                  img={data.img_link}
                  link={data.git_link}
                />
              ))}

            </div>

          </div>
        </div>

        {/* Fifth content: Responsive */}
        <div className='flex background_1'>
          <div className='mx-auto py-6'>

            <Header head="Experiencia laboral" subtitle="TRAYECTORIA" />

            {/* Content */}
            <div className='pt-10'>

              <Timeline horizontal>

                {
                  experience.map((data, index) => (
                    <Timeline.Item className='mx-5 ' key={index}>
                      <Timeline.Point className="-right-1" />

                      <Timeline.Content>

                        <Timeline.Time>{data.start} - {data.end}</Timeline.Time>

                        <Timeline.Title className="text-xl font-bold">{data.company}</Timeline.Title>
                        <Timeline.Title className="text-base font-medium">{data.position}</Timeline.Title>

                        <Timeline.Body>
                          Funciones:
                          {
                            data.duties.map((data, index) => (<p key={index} className='pl-10'>- {data}.</p>))
                          }
                        </Timeline.Body>

                      </Timeline.Content>
                    </Timeline.Item>
                  ))
                }

              </Timeline>

            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}
