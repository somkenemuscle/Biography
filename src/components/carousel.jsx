import React from 'react'
import '../styles/carousel.css'
import albert1 from '../image/chidindu (18).png';
import albert2 from '../image/work (2).png';
import albert3 from '../image/chidindu (22).png';

function carousel() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={albert1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={albert2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={albert3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default carousel