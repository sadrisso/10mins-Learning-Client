import React from 'react';
import Banner from '../components/Banner';
import SectionTitle from '../components/SectionTitle';


const Home = () => {

    return (
        <div>
            <Banner />

            <div>
                <SectionTitle heading="Study Sessions" subHeading="let's start your study"/>
            </div>
        </div>
    );
};

export default Home;