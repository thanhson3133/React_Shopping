import React from 'react';
import Announcement from '../../components/Announcement';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import NewSletter from '../../components/NewSletter';
import Products from '../../components/Products';
import Slider from '../../components/Slider';

const HomePage = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewSletter/>
            <Footer/>
        </div>
    );
}

export default HomePage;
