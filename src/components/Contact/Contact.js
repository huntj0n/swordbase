import React from 'react';
import './Contact.scss';

import {ReactComponent as RightArrow} from '../../assets/rightArrow.svg';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <h1>Connect with me.</h1>
                <div className="contact__box">
                    <div className="contact__boxColumn">
                        <div className="form">
                            <input type="text" name='name' autoComplete='off' required />
                            <label htmlFor="name" className='label-name'>
                                <span className='content-name' >Name</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name='email' autoComplete='off' required />
                            <label htmlFor="email" className='label-name'>
                                <span className='content-name' >email</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name='phone' autoComplete='off' required />
                            <label htmlFor="phone" className='label-name'>
                                <span className='content-name' >telephone <span className='subtext'>(if you prefer a call)</span></span>
                            </label>
                        </div>
                    </div>

                    <div className="contact__boxColumn">
                        <div className="form message">
                            <textarea name='message' required autoComplete='off' wrap='off' />
                            <label htmlFor="message" className='label-name messageLabel'>
                                <span className='content-message' >Brief message</span>
                            </label>
                        </div>
                        
                    </div>
                </div>
                <div className="contact__Submit">
                    <button>Send <RightArrow className='submitArrow' /> </button>
                </div>
            </div>
        </div>
    )
}

export default Contact