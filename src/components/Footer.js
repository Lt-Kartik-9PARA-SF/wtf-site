import React from 'react'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div id="footerImage">

            </div>

            <div className='footer'>

                <div id='footer-logo'>
                    <p>Logo</p>
                    <div id='social'>
                    <i class="fa-brands fa-facebook-f fa-lg"></i>
                    <i class="fa-brands fa-instagram fa-lg"></i>
                    <i class="fa-brands fa-linkedin fa-lg"></i>
                    </div>

                </div>

                <div id='quick-links'>
                    <h3>Quick Links</h3>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">WTF in News</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Refund & Cancellation</a>
                </div>

                <div id='explore'>
                    <h3>Explore</h3>
                    <a href='#'>Arenas</a>
                    <a href='#'>Studio</a>
                    <a href='#'>Nutrition</a>
                </div>
                <div id='contact'>
                    <h3>Contact</h3>
                    <div id='ro'>
                        <p><i class="fa fa-map-marker" aria-hidden="true"></i></p>
                        <strong>Ro: S 1502, Amarpali Silicone City, Sector 76, Noida, Uttar Pradesh, India</strong>
                    </div>

                    <div id='ho'>
                        <p><i class="fa fa-map-marker" aria-hidden="true"></i></p>
                        <strong>HO : C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh India</strong>
                    </div>

                    <div id='phone'>
                    <p><i class="fa fa-phone" aria-hidden="true"></i></p>
                    <strong>+919090639005</strong>
                    </div>

                    <div id='email'>
                    <p><i class="fa fa-envelope" aria-hidden="true"></i></p>
                    <strong>support@wtfup.me</strong>

                    </div>

                </div>
            </div>
        </div>
    )
}
