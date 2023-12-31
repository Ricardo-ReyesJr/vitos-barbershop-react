import React from 'react';

export default function Contact() {
    return(
        <>
            {/* Contact Form */ }
            <main className='container'>
                <section className="contactArea row">
                    <section className="contactForm col-md-6">
                    <form action='https://formspree.io/f/mzblyryl' method='POST'>
                        <h3>Contact Me</h3>

                        <label for="name">Name</label>
                        <input type="text" 
                        id='name'
                        name='sender-name'
                        placeholder="Enter Your Name" className='inputField'required />

                        <label for="email">Email</label>
                        <input type="email" 
                        placeholder="Enter Your Email" id="email" 
                        name='sender-name'
                        className='inputField'required />

                        <label for="message">Message</label>
                        <textarea id="Message" rows="4" placeholder="Enter Your Message"
                        name='message'
                        className='inputField'></textarea>
                        <button type="submit">Send</button>
                    </form>
                    </section>

                    { /* Location and Map */}
                    <section className="locationHours col-md-6">
                   <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.267326441792!2d-98.32727162623104!3d26.220502089498158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a863e6722cf7%3A0x26587d6773e32637!2s1418%20N%20Conway%20Ave%2C%20Mission%2C%20TX%2078572!5e0!3m2!1sen!2sus!4v1696092110355!5m2!1sen!2sus" width="300" height="300" style={{border:0}} allowfullscreen="" aria-hidden="false" tabIndex="0" title='location map' />
                    </div>
                    <div className="hours">
                        <h1>Location & Hours</h1>
                        <p>1418 N. Conway</p>
                        <p>Mission, Texas 78572</p>
                        <p>(956)897-2000</p>
                        <br />

            {/* Hours of Operation */}
                        <p>Monday | Closed</p>
                        <p>Tuesday | 9:30 AM - 6:00 PM</p>
                        <p>Wednesday | 9:30 AM - 6:00 PM</p>
                        <p>Thursday | 9:30 AM - 6:00 PM</p>
                        <p>Friday | 9:30 AM - 6:00 PM</p>
                        <p>Saturday | 9:30 AM - 6:00 PM</p>
                        <p>Sunday | Closed</p>

                    </div>
                    </section>
                </section>
            </main>
        </>
    )
}