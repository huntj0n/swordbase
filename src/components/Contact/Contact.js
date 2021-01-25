import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <h1>Connect with me.</h1>
                <div className="contact__Box">
                    <div className="contact__Info">
                        <p>Name</p>
                        <input type="text" />
                        <p>Email</p>
                        <input type="text" />
                        <p>Phone <span>If you'd prefer a call</span></p>
                        <input type="text"/>
                    </div>
                    <div className="contact__Message">
                        <p>Brief Message...</p>
                        <textarea type="text" rows style={{height: '90%', marginTop: '-15px',}}/>
                    </div> 
                    
                </div>
                <div className="contact__Submit">
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact