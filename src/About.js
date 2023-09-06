import React from 'react';
import './About.css';
import ab from './assets/nagpur1.jpg';

export default function About() {
    return (
        <>
            <div style={{ backgroundImage: `url(${ab})` }} className='ab2'>
                <fieldset className='ab1'>
                <h1 className='about1'>Nagpur</h1>
                <br></br>
                <p>Nagpur is the third-largest city of the Indian state of Maharashtra.
                    Known as the "Orange City", Nagpur is the 13th largest city in India by population and according to an Oxford's Economics report,
                    Nagpur is projected to be the fifth fastest growing city in the world from 2019 to 2035 with an average growth of 8.41%.
                    It has been proposed as one of the Smart Cities in Maharashtra and is one of the top ten cities in India in Smart City Project execution</p>
                <br></br>
                <p>Nagpur is the seat of the annual winter session of the Maharashtra state assembly.
                    It is a major commercial and political centre of the Vidarbha region of Maharashtra.
                    In addition, the city derives unique importance from being an important location for the Dalit Buddhist movement
                    and the headquarters for the right-wing Hindu organization and public serves organisation RSS.
                    Nagpur is also known for the Deekshabhoomi, which is graded an A-class tourism and pilgrimage site,
                    the largest hollow stupa among all the Buddhist stupas in the world.
                    The regional branch of Bombay High Court is also situated within the city</p>
                    </fieldset>
            </div>

        </>
    )
}
