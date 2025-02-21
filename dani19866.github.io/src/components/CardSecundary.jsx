import React, { Component } from 'react'

export default class CardSecundary extends Component {
    render() {
        return (
            <div className="m-auto w-[350px] bg-white rounded-md shadow-lg">

                {/* Skill */}
                <div className="flex justify-center text-center pt-4 flex-col">
                    <h6 className="text-xs font-semibold">
                        {this.props.subtitle}
                    </h6>

                    <h3 className="text-4xl font-extrabold">
                        {this.props.head}
                    </h3>

                </div>

                {/* Features */}
                <div className='w-full flex gap-4 h-full mt-5 bg-[#EDEDED] rounded-b-md p-6'>

                    {/* Card */}
                    <div className='flex flex-col gap-3'>

                        {/* Feature */}
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm">{this.props.point1}</p>
                        </div>

                        {/* Feature */}
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm">{this.props.point2}</p>
                        </div>

                        {/* Feature */}
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm">{this.props.point3}</p>
                        </div>

                        {/* Feature */}
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm">{this.props.point4}</p>
                        </div>

                        {/* Feature */}
                        <div className='flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm">{this.props.point5}</p>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
