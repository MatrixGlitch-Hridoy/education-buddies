import React from 'react';
import banner from '../images/banner.png'
const Banner = () => {
    return (
        <>
            <div className="bg-primary py-5 bg-opacity-75">
                <div className="container py-5">
                <div className="row align-items-center py-5">
                    <div className="col-md-6">
                        <h1>The latest digital skills, within reach.</h1>
                        <p>Discover the fastest, most effective way to gain job-ready expertise for the careers of the future.</p>
                        <button className="btn btn-dark">Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img src={banner} alt="fdg" className="w-75" />
                    </div>
                </div>
                </div>
                
            </div>
        </>
    );
};

export default Banner;