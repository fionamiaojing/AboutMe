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
            <img src="/diaryDemo.gif" alt="diary app demo" width="375" height="812" />
            <br/>
            <hr/>
            <br/>
            <div className='ptitle'>
                Itsy
            </div>
            <div className='pdes'>
                -- A Clone of Etsy
            </div>
            <img src="/itsyDemo.gif" alt="Itsy app demo" width="640" height="360"/>
            <br/>
            <hr/>
            <br/>
            <div className='ptitle'>
                AbleTable
            </div>
            <div className='pdes'>
                -- A Clone of OpenTable
            </div>
            <div>
                Throughput and Latency Demo
            </div>
            <br/>
            <img src="/Abletable.png" alt="backend performance demo" width="640" height="360"/>
            <hr/>
            <div className='ptitle'>
                Twittler
            </div>
            <div className='pdes'>
                -- A chat app
            </div>
            <img src="/twittler.gif" alt="Twittler demo"/>
            <hr/>
            <div className='ptitle'>
                IsTodayFriday
            </div>
            <div className='pdes'>
                -- An ISO App for fun
            </div>
            <img src="/isTodayFriday.gif" alt=""/>
            <br/>
            <div className='end'>
                To be continued....
            </div>
        </div>
    );
};

export default Project;