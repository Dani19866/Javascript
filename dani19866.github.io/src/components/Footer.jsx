import React, { Component } from 'react'
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import x from "../assets/x.png"

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='primary_background w-full h-[44px] p-1 flex justify-center'>
                    <div className='flex justify-center md:justify-between gap-5 items-center w-[448px]'>
                        <a href="https://github.com/Dani19866">
                            <img src={github} />
                        </a>
                        <a href="https://www.instagram.com/_de.oliveira_/">
                            <img src={instagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-antonio-de-oliveira-/">
                            <img src={linkedin} />
                        </a>
                        <a href="https://twitter.com/DanielDe0liva">
                            <img src={x} />
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
