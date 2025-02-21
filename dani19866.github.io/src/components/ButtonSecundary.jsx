import React, { Component } from 'react'

export default class ButtonSecundary extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <span className='flex justify-center items-center background_2 px-[41px] py-[17px] rounded-md text-[#4F46E5] shadow-md font-medium hover:cursor-pointer'>
                {this.props.title}
            </span>
        )
    }
}
