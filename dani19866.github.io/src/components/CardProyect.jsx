import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CardProyect extends Component {
    getRandomColor() {
        const colors = [
            'bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-indigo-200', 'bg-purple-200', 'bg-pink-200',
            'bg-teal-200', 'bg-orange-200', 'bg-lime-200', 'bg-cyan-200', 'bg-fuchsia-200', 'bg-amber-200', 'bg-emerald-200',
            'bg-gray-200', 'bg-gray-200', 'bg-gray-200', 'bg-red-300', 'bg-blue-300',
            'bg-green-300', 'bg-yellow-300', 'bg-indigo-300', 'bg-purple-300', 'bg-pink-300', 'bg-teal-300', 'bg-orange-300',
            'bg-lime-300', 'bg-cyan-300', 'bg-fuchsia-300', 'bg-amber-300', 'bg-emerald-300', 'bg-gray-300',
        ];


        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    render() {
        return (
            <div className="h-[550px] w-[340px] bg-white rounded-md shadow-lg relative">

                {/* Image */}
                <div className='w-full bg-slate-300 h-[220px] rounded-t-md'>
                    <img className="object-cover w-[340px] object-left h-full" src={this.props.img} alt={this.props.alt} />
                </div>

                {/* Content */}
                {/* Subtitle, Title, desc */}
                <div className='mt-1 p-3 leading-7 '>
                    <div>
                        <span className='primary_text text-sm font-medium'>
                            {this.props.subtitle}
                        </span>

                        <h4 className="font-semibold text-lg">
                            {this.props.title}
                        </h4>

                        <p className='mt-1 text-base'>
                            {this.props.desc}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className='mt-6 flex flex-row flex-wrap gap-2 justify-center text-xs'>

                        {
                            this.props.tags.map((data, index) => (
                                <div
                                    key={index}
                                    className={`px-2 py-1 ${this.getRandomColor()} inline-block rounded-lg`}
                                >
                                    {data}
                                </div>
                            ))
                        }

                    </div>

                    {/* Button */}
                    <div className='absolute bottom-3 right-3'>
                        <div>
                            <Link to={this.props.link} target="_blank" className="bg-[#ffed47] border border-[#d7c943] px-10 rounded-md py-1">
                                <span className="font-semibold">
                                    Ver git
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
