import React from 'react';
import HomeSlider from './slider/HomeSlider';
import CategoryTab from './category tab/CategoryTab';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
        return (
        <>
            <HomeSlider></HomeSlider>
            <CategoryTab></CategoryTab>
        </>
    );
};

export default Home;