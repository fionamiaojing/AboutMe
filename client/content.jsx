import React from 'react';
import About from './about.jsx';

export default class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='content'>
                <About />
            </div>
        );
    }
}