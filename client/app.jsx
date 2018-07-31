import React from 'react';
import Header from './header.jsx';
import SideBar from './sideBar.jsx';
import Content from './content.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayContent: 1
        };
    }

    handleClick(num) {
        console.log(num);
        this.setState({
            displayContent: num
        });
    }

    render() {
        return (
            <div>
                <Header />
                <hr/>
                <div className='container'>
                    <SideBar handleClick={this.handleClick.bind(this)}/>
                    <Content displayContent={this.state.displayContent}/>
                </div>
            </div>
        );
    }
}