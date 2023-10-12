import React from 'react';
import shoppole1 from './shop_pole1.png';

export default function Header() {
    return(
        <>
        <header>
            <nav className='md:flex'>
                    <div className="logoImg">
                        <h1 className="logo">Vito's Barbershop</h1>
                        <img className="shopPole hidden md:flex" src={shoppole1} alt="" />
                    </div>
                    <ul className="menuBarItem">
                        <li className="menuItems"><a className="menuLink" href="/">Home</a></li>
                        <li className="menuItems"><a className="menuLink" href="gallery">Gallery</a></li>
                        <li className="menuItems"><a className="menuLink" href="https://squareup.com/appointments/book/lrq3d9374iqdsx/44P8ESKTVNVYE/start" target="_blank">Book Now</a></li>
                        <li className="menuItems"><a className="menuLink" href="contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}