import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Skill from '../components/Skill'
import CardProyect from '../components/CardProyect';

import json from "../data/skills.json"

export default class skills extends Component {
  constructor() {
    super()
    this.state = {
      keyword: "",
    };
  }

  filter(e) {
    const keyword = e.target.value.toLowerCase();
    this.setState({ keyword });
  }

  render() {
    const filteredSkills = json.filter((skill) =>
      skill.tags.some((tag) => tag.toLowerCase().includes(this.state.keyword))
    );

    return (
      <>
        <Navbar />
        {/* Content */}

        {/* Header */}
        <div className='flex mt-6'>
          <div className='mx-auto'>
            <Header head="Habilidades técnicas" subtitle="2020 - Actualidad" />
          </div>
        </div>

        {/* Projects */}
        <div className='flex mb-6 mt-6'>
          <div className='mx-auto'>

            {/* Search */}
            <div className='px-4 mx-auto flex flex-col gap-2 max-w-[550px]'>
              <div>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">JAVA, MongoDB, MySQL, etc...</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>

                  </div>
                  <input
                    onChange={(e) => this.filter(e)}
                    type="search"
                    id="search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Buscar por categoría, ejemplo: lenguaje, framework, SMBD..."
                    required
                  />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className='
              p-2
              mt-2
              md:grid
              md:grid-cols-3
              flex
              flex-col
              gap-6
            '>
              {

                filteredSkills.map((data, index) => (
                  <Skill img={data.img_link} title={data.skill} tags={data.tags} key={index} />
                ))

              }
            </div>

          </div>
        </div>

        {/* Content */}
        <Footer />
      </>
    )
  }
}
