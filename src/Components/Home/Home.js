import React from 'react';
import Home_Main from './Home_Main';
import Home_Info from './Home_Info';
import Home_Gallery from './Home_Gallery';
import SubScribe from '../SubScribe';

function Home() {
    return (
        <div>
            <Home_Main/>
            <Home_Info/>
            <Home_Gallery/>
            <SubScribe/>
        </div>
    )
}

export default Home
