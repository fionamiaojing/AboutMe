import React from 'react';
import About from './about.jsx';
import Project from './projects.jsx';
import Contact from './contact.jsx';

export default class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let display = <About />;
        if (this.props.displayContent === 1) {
            display = <About />;
        } else if (this.props.displayContent === 2) {
            display = <Project />;
        } else {
            display = <Contact />;
        }

        return (
            <div className='content'>
            {
               display
            }
            </div>
        );
    }
}