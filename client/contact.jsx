import React from 'react';

const Contact = () => {
    return (
        <div className='contactInfo'>
            <div className='info'>
                <section>
                    Email: 
                </section>
                <section className='infodet'>
                    <a>fionamiaojing@gmail.com</a>
                </section>
                   
            </div>
            <div className='info'>
                <section>
                    Github:
                </section>
                <section className='infodet'>
                    <a href="https://github.com/fionamiaojing">github.com/fionamiaojing</a>
                </section>
            </div>
            <div className='info'>
                <section>
                    LinkedIn: 
                </section>
                <section className='infodet'>
                    <a href="https://www.linkedin.com/in/fionamiaojing">www.linkedin.com/in/fionamiaojing</a>
                </section>
            </div>
            <div className='info'>
                <section>
                    Phone
                </section>
                <section className='infodet'>
                    (650) 440 8799
                </section>
            </div>
        </div>
    );

};

export default Contact;