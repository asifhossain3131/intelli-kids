import React from 'react';
import HomeSlider from './slider/HomeSlider';
import CategoryTab from './category tab/CategoryTab';
import Sponsors from './sponsors/Sponsors';
import Testimonials from './customer review/Testimonials';

const Home = () => {
        return (
        <>
            <HomeSlider></HomeSlider>
            <CategoryTab></CategoryTab>
            <Testimonials></Testimonials>
            <Sponsors></Sponsors>
        </>
    );
};

export default Home;