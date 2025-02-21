import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='flex flex-col'>
                <span className="font-semibold text-base primary_text block text-center">
                    {this.props.subtitle}
                </span>

                <h2 className="font-extrabold text-4xl block text-center">
                    {this.props.head}
                </h2>
            </div>
        )
    }
}
