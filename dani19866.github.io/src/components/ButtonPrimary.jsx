import React, { Component } from 'react'

export default class ButtonPrimary extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <span className='inline-flex justify-center items-center primary_background px-[41px] py-[17px] rounded-md text-white shadow-md font-medium'>
                {this.props.title}
            </span>
        )
    }
}
