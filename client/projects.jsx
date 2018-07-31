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
            <img src="https://github.com/fionamiaojing/DearDiary/blob/solo/deardiary.gif" width="375" height="812" />
            <br/>
            <hr/>
            <br/>
            <div className='ptitle'>
                Itsy
            </div>
            <div className='pdes'>
                -- A Clone of Etsy
            </div>
            <img src="https://github.com/hrsf-narwhal/product-info-purchase/blob/master/Itsy_demo.gif" />
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
            <img src="https://github.com/AbleTableHR95/fiona-menus/blob/master/Abletable.png"/>
        </div>
    );
};

export default Project;