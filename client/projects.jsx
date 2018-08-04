import React from 'react';

const Project = () => {
    return (
        <div>
            <div className='ptitle'>
                Dear Diary
            </div>
            <div className='pdes'>
                -- A Diary App for writing stories, mark ideas, choose feelings for dialy use.
            </div>
            <img src="/AboutMe/public/diaryDemo.gif" alt="diary app demo" width="375" height="812" />
            <div className='tech'>
                Technologies: React Native/Redux, Node.js/Express, Firebase, Google Cloud App Engine, MongoDB
            </div>
            <br/>
            <hr/>
            <br/>
            <div className='ptitle'>
                Itsy
            </div>
            <div className='pdes'>
                -- Full-stack online B2C purchasing app 
            </div>
            <img src="/AboutMe/public/itsyDemo.gif" alt="Itsy app demo" width="640" height="360"/>
            <div className='tech'>
                Technologies: React/Redux, Node.js/Express, AWS, ECS, Docker, Jest, Mocha/Chai, MongoDB, Mongoose
            </div>
            <br/>
            <hr/>
            <br/>
            <div className='ptitle'>
                AbleTable
            </div>
            <div className='pdes'>
                -- Back-end of a restaurant reservation app
            </div>
            <div>
                Throughput and Latency Demo
            </div>
            <br/>
            <img src="/AboutMe/public/Abletable.png" alt="backend performance demo" width="640" height="360"/>
            <div className='tech'>
                Technologies: AWS/EC2, Docker, Nginx, Redis, Loader.io, Artillery, New Relic, CircleCI, Mocha/Chai, Node.js/Express, PostgreSQL
            </div>
            <hr/>
            <br/>
            <div className='ptitle'>
                Twittler
            </div>
            <div className='pdes'>
                -- A chat app
            </div>
            <img src="/AboutMe/public/twittler.gif" alt="Twittler demo"/>
            <div className='tech'>
                Technologies: HTML, CSS, Javascript, JQuery
            </div>
            <hr/>
            <br/>
            <div className='ptitle'>
                IsTodayFriday
            </div>
            <div className='pdes'>
                -- An ISO App for fun
            </div>
            <img src="/AboutMe/public/isTodayFriday.gif" alt=""/>
            <br/>
            <div className='tech'>
                Technologies: Swift
            </div>
            <div className='end'>
                To be continued....
            </div>
        </div>
    );
};

export default Project;