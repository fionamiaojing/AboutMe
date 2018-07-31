import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <div className='section'>Software Developer</div>
            <p>
            I am a full-stack software engineer with web app building experience in Javascript, React and Redux, Angular, and Node.js/Express. I also have a strong background in both relational and non-relational database such as MySQL, PostgreSQL, MongoDB, and Cassandra. 
            </p>
            <br/>
            <p>
            I am seeking a collaborative and enthusiastic work environment with challenging projects and an inspiring and curious team. My experience building web applications have provided me with the adaptability to learn new technologies and add value to the company.
            </p>
            <br/>
            <p>
            This year, I worked on a back-end system design project with a front-end legacy of restaurant reservation model using PostgreSQL database along with Redis cache and a load balancer which achieves the capability to handle 1500 RPS.
            </p>
            <br/>
            <p>
            I also worked on another full-stack single page web-app project of designing the sidebar which includes product selection, shipping, and purchasing module for a b2c trading platform.
            </p>
            <br/>
            <hr/>
            <div className='section'>Skill Sets</div>
            <table>
                <tbody>
                    <tr>
                        <td>Front-end: </td>
                        <td>
                        React, Redux, React-Router, React Native, JQuery, HTML, CSS,  Angular, Backbone, MVC Architecture
                        </td>
                    </tr>
                    <tr>
                        <td>Back-end: </td>
                        <td>
                        Node.js, Express, MongoDB, Mongoose, MySQL, PostreSQL, Cassendra, Redis, Service Oriented Architecture
                        </td>
                    </tr>
                    <tr>
                        <td>DevTools: </td>
                        <td>
                        Docker, Git, AWS, Google Cloud App Engine, Babel, Webpack, Chai, Mocha, Jest, Enzyme, Nginx, Heroku
                        </td>
                    </tr>
                    <tr>
                        <td>Language: </td>
                        <td>
                        Javascript, Python, Swift
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default About;