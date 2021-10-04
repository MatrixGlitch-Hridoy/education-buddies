import React from 'react';
import Banner from '../Banner/Banner';
import ContactUS from '../Contact Us/ContactUS';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../ServiceSection/Services';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ContactUS></ContactUS>
        </div>
    );
};

export default HomePage;