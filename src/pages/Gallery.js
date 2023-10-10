import React from "react";
import imgvito from './Images/imgvito.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import img5 from './Images/img5.jpg';
import img6 from './Images/img6.jpg';

export default function Gallery() {
    return(
        <>
                <main className="mainGallery">
                <h1>Gallery</h1>
                <div className="gridContainer">
                    <div className="gridImg">
                        <img className="gridItem item1" src={imgvito} alt="" />
                        <p>Vito G The Barber</p>
                    </div>
                    <div className="gridImg">
                        <img className="gridItem item3" src={img2} alt="" />
                        <p>Haircut Designs</p>
                    </div>
                    <div className="gridImg">
                        <img className="gridItem item4" src={img3} alt="" />
                        <p>Adult Haircut</p>
                    </div>
                    <div className="gridImg">
                        <img className="gridItem item5" src={img4} alt="" />
                        <p>Kids Haircut</p>
                    </div>
                    <div className="gridImg">
                        <img className="gridItem item6" src={img5} alt="" />
                        <p>Fade! Fade! Fade!</p>
                    </div>
                    <div className="gridImg">
                        <img className="gridItem item7" src={img6} alt="" />
                        <p>Happy Clients!</p>
                    </div>
                </div>
            </main>
        </>
    )
}