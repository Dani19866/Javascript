import React from 'react';
import blackjackImg from "../assets/images/blackjack.jpg"
import universityImg from "../assets/images/university.png"
import bingoImg from "../assets/images/bingo.png"
import graphImg from "../assets/images/graph.png"
import menuImg from "../assets/images/menu1.png"
import menu2Img from "../assets/images/menu2.png"
import scriptImg from "../assets/images/pentesting.jpg"
import laravelImg from "../assets/images/laravel.png"

const images = {
    blackjackImg: blackjackImg,
    universityImg: universityImg,
    bingoImg: bingoImg,
    graphImg: graphImg,
    menuImg: menuImg,
    menu2Img: menu2Img,
    scriptImg: scriptImg,
    laravelImg: laravelImg
}

export default function CardProject({ project }) {
    const getRandomColor = () => {
        const colors = [
            'bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-indigo-200', 'bg-purple-200', 'bg-pink-200',
            'bg-teal-200', 'bg-orange-200', 'bg-lime-200', 'bg-cyan-200', 'bg-fuchsia-200', 'bg-amber-200', 'bg-emerald-200',
            'bg-gray-200', 'bg-gray-200', 'bg-gray-200', 'bg-red-300', 'bg-blue-300',
            'bg-green-300', 'bg-yellow-300', 'bg-indigo-300', 'bg-purple-300', 'bg-pink-300', 'bg-teal-300', 'bg-orange-300',
            'bg-lime-300', 'bg-cyan-300', 'bg-fuchsia-300', 'bg-amber-300', 'bg-emerald-300', 'bg-gray-300',
        ];

        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <div className="h-[540px] w-[300px] bg-white rounded-md shadow-lg relative">
            {/* Image */}
            <div className='w-full bg-slate-300 h-[220px] rounded-t-md'>
                <img src={images[project.img]} className="object-cover object-center w-[340px] h-full" />
            </div>

            {/* Content */}
            <div className='mt-1 p-3 leading-7'>
                <div>
                    <span className='text-sm font-medium text-[#17429D]'>
                        {project.subtitle}
                    </span>

                    <h4 className="font-semibold text-lg">
                        {project.title}
                    </h4>

                    <p className='mt-1 text-sm'>
                        {project.desc}
                    </p>
                </div>

                {/* Tags */}
                <div className='mt-2 flex flex-row flex-wrap gap-2 justify-center text-xs'>
                    {
                        project.tags.map((data, index) => (
                            <div
                                key={index}
                                className={`px-2 py-1 ${getRandomColor()} inline-block rounded-lg`}
                            >
                                {data}
                            </div>
                        ))
                    }
                </div>

                {/* Button */}
                <div className='absolute bottom-3 right-3'>
                    <div>
                        <a href={project.git_link} target="_blank" className="hover:bg-[#ffed47] border border-[#d7c943] px-10 rounded-md py-1 font-semibold hover:cursor-pointer">
                            Ver git
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}