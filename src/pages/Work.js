import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

function Work(props) {
    return(
        <div>
            {/* takes hero component but changes title */}
            <Hero title={props.title}/>
            <Card />
        </div>
    );
}

export default Work;