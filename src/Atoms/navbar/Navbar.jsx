/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
/* eslint-disable-next-line */

function Navbar() {
    return (
        <nav className="px-3 navbar navbar-expand-lg navbar-light " id="navbarScroll">
            <a href="#home-carousel">
                <img src="https://i.ibb.co/51ZNnWz/Genero23-01-1.png" width="50px" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltarkup">
                <div className="navbar-nav align-items-center" >
                    <a className="nav-item nav-link active text-light" href="#home-carousel">HOME</a>
                    <a className="nav-item nav-link text-light" href="#about">ABOUT</a>
                    <a className="nav-item nav-link text-light" href="#history">PAST</a>
                    <a className="nav-item nav-link text-light" href="#theme">THIS YEAR</a>
                    <a className="nav-item nav-link text-light" href="#eventsList">EVENTS</a>
                    <a className="nav-item nav-link text-light" href="#queries">FAQ</a>

                    <Link className="nav-item nav-link text-light" to="/schedule">SCHEDULE</Link>
                    {/* <Link className="nav-item nav-link text-light" to="/sponsor">SPONSORS</Link> */}
                    <Link className="nav-item nav-link text-light" to="/teampage">TEAM</Link>
                    <a className="nav-item nav-link text-light" href="#register"><button className=''>GET TICKET</button></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar