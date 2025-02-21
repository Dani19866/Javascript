import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div className="bg-white border-2 rounded-full px-3 py-2 flex flex-row gap-4 w-full md:w-[278px]">

                {/* Image */}
                <div>
                    <img src={this.props.img} alt="Image" height={40} width={40} className="max-h-10 max-w-10 rounded-full"/>
                </div>

                {/* Content */}
                <div className="max-h-10 flex flex-col justify-center">
                    <p className="text-base font-bold">{this.props.title}</p>
                    <p className="text-sm md:text-xs">{this.props.tags}</p>
                </div>

            </div>
        )
    }
}
