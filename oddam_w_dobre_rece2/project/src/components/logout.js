import React, {Component, useState} from "react";
import Decortaion from '../assets/Decoration.svg'

const Logout = () => {

    return (
        <>
            <div className={'universalMenu'}>

                <div className={'universalMenuLogin'}>

                    <button type={"button"}>Zaloguj</button>
                    <button type={"button"}>Załóż konto</button>

                </div>
                <div className={'universalMenuMenu'}>

                    <button type={"button"}>Start</button>
                    <button type={"button"}>O co chodzi?</button>
                    <button type={"button"}>O nas</button>
                    <button type={"button"}>Fundacje i ogranizacje</button>
                    <button type={"button"}>Kontakt</button>
                </div>

                <div className={'loginRegisterLogout'}>

                    <div className={'login'}>
                        <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                        <img src={Decortaion} alt=""/>
                        <div>
                            <button type={'button'}>
                                Strona Głowna
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Logout;
