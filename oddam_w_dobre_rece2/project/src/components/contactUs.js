import React from "react";
import decortion from '../assets/Decoration.svg';
import fb from '../assets/Facebook.png';
import ins from '../assets/Instagram.png';

const ContactUs = () => {

    return (
        <>
            <div className={'ContactUsMainDiv'}>
                <div className={'box1'}>

                </div>
                <div className={'box2'}>
                    <div className={'contactAs'}>
                        <h2>Skontaktuj się z nami</h2>
                        <img src={decortion} alt="decortion"/>
                    </div>
                    <div className={'nameAndEmail'}>
                        <div className={'name'}>
                            <label htmlFor="">Wpisz swoje imię </label>
                            <input type="text"/>
                        </div>
                        <div className={'email'}>
                            <label htmlFor="">Wpisz swój email</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className={'yourMessage'}>
                        <div>
                            <label htmlFor="">Wpisz swoją wiadomość</label>
                            <input type="text"/>
                        </div>
                        <div>

                        </div>

                    </div>
                    <div className={'sent'}>
                        <button type={'button'}>Wyślij
                        </button>
                    </div>
                    <div className={'fbInst'}>
                        <div>
                            <a href="https://www.facebook.com/">
                                <img src={fb} alt="facebook"/>
                            </a>

                        </div>
                        <div>
                            <a href="https://www.instagram.com/?hl=en">
                                <img src={ins} alt="instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs;