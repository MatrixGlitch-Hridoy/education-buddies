import React from 'react';
import Banner from '../Banner/Banner';
import ContactUS from '../Contact Us/ContactUS';
import Services from '../ServiceSection/Services';

const HomePage = () => {
    return (
        <div className="bg-light bg-gradient">
            <Banner></Banner>
            <Services></Services>
            <ContactUS></ContactUS>
        </div>
    );
};

export default HomePage;