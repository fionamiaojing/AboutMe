import React from 'react';

export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleSideBarClick = this.handleSideBarClick.bind(this);
    }

    handleSideBarClick(num) {
        this.props.handleClick(num);
    }

    render() {
        return (
            <div className='sidenav'>
                <ul>
                    <li onClick={() => this.handleSideBarClick(1)}>About Me</li>
                    <li onClick={() => this.handleSideBarClick(2)}>My Projects</li>
                    <li onClick={() => this.handleSideBarClick(3)}>Contact Me</li>
                </ul>
            </div>
        );
    }
}