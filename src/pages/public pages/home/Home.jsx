import React from 'react';
import HomeSlider from './slider/HomeSlider';
import CategoryTab from './category tab/CategoryTab';
import Sponsors from './sponsors/Sponsors';
import Testimonials from './customer review/Testimonials';
import PhotoGallery from './gallery/PhotoGallery';
import LatestNews from './latest news/LatestNews';

const Home = () => {
        return (
        <>
            <HomeSlider></HomeSlider>
            <PhotoGallery></PhotoGallery>
            <CategoryTab></CategoryTab>
            <Testimonials></Testimonials>
            <LatestNews></LatestNews>
            <Sponsors></Sponsors>
        </>
    );
};

export default Home;