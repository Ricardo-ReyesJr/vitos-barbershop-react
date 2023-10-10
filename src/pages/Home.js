import React from "react";
import vito from './Images/imgheroshot.jpg';

export default function Home() {
    return(
        <>
            <main className="heroSections">
            <section className="heroSection1">
                <img className="vitoHeroShot" src={ vito } alt="vito" />
            </section>
            <section className="heroSection2">
                <p className="services">Services</p>
                <p>Senior Citizens Haircut 62+  |
                    $22.00 ... 30 Min.
                </p>
                <p>First Responders Haircut  |
                    $25.00 ... 45 Min.
                </p>
                <p>Adult Haircut/Fade  |
                    30.00 ... 45 Min.
                </p>
                <p>Kids Haircut/Fade  |
                    $30.00 ... 45 Min.
                </p>
                <p>Haircut/Design  |
                    $30.00 ... 45 Min.
                </p>
                <p>Haircut/Beard Trim & Line up  |
                    $50.00 ... 1 Hour.
                </p>
                <p>Hot Towel Beard/Shave & Line Up  |
                    $30.00 ... 45 Min.
                </p>
                <span>Quality service haircut, beard trimming
                    to design length blade work, detailing,
                    hot towel, and hairstyle.
                </span>
            </section>
            </main>
        </>
    )
}