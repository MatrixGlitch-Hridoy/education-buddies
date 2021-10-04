import React from 'react';
import banner from '../images/banner.png'
const Banner = () => {
    return (
        <>
            <div className="bg-primary py-5">
                <div className="container py-5">
                <div className="row align-items-center py-5">
                    <div className="col-md-6">
                        <h1>This is banner</h1>
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