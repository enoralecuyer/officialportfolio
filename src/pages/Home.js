import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

function Home(props) {
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Card />
        </div>
    );
}

export default Home;