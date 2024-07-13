import React from 'react';
import Slider from '../Slider/Slider';
import Category from '../Category/Category';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className=''>
             <Helmet>
               
                <title>HOME - APT COMMERCE</title>
            </Helmet>
              <Slider/>
              <Category/>
        </div>
    );
};

export default Home;