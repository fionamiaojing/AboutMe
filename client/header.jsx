import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div id='title'>
                    Fiona Miao
                </div>
                <div className='contact'>
                    <p>
                        <a>fionamiaojing@gmail.com</a>
                    </p>
                    <p>
                        <a href="https://github.com/fionamiaojing">github.com/fionamiaojing</a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/fionamiaojing">www.linkedin.com/in/fionamiaojing</a>
                    </p>
                </div>

            </div>
        );
    }
}
