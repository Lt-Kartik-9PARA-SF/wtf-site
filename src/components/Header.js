import React from 'react'
import image from '../images/image.png';
export default function Header() {
    
    return (
        <>
            <header id="hdr">
                <div id='logo-container'>
                    <div id='logo'>Logo</div>
                </div>

                <nav >
                    <a href="#">Finness</a>
                    <a href="#">Nutrition</a>
                    <a href="#">Gym</a>
                    <a href="#">Become WTF Partner</a>
                    <a href="#">About Us</a>
                    <button id='login-btn'>Login</button>
                </nav>

            </header>

            <div id='top-image'>
        <image src={image} alt="alt"/>
            </div>

        </>
    )
}
