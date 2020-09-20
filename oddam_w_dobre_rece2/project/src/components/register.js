import React, {Component, useState} from "react";
import Decortaion from '../assets/Decoration.svg'

const Register = () => {

    const Zaloguj = () => {
        localStorage.setItem('x', JSON.stringify(0));
        window.location.reload();
    }

    const ZałóżKonto = () => {
        localStorage.setItem('x', JSON.stringify(1));
        window.location.reload();
    }

    const MainWeb = () => {
        localStorage.setItem('x', JSON.stringify(3));
        window.location.reload();
    }

    return (
        <>
            <div className={'universalMenu'}>

                <div className={'universalMenuLogin'}>

                    <button onClick={Zaloguj} cltype={"button"}>Zaloguj</button>
                    <button onClick={ZałóżKonto} type={"button"}>Załóż konto</button>

                </div>
                <div className={'universalMenuMenu'}>

                    <button onClick={MainWeb} type={"button"}>Start</button>
                    <button onClick={MainWeb} type={"button"}>O co chodzi?</button>
                    <button onClick={MainWeb} type={"button"}>O nas</button>
                    <button onClick={MainWeb} type={"button"}>Fundacje i ogranizacje</button>
                    <button onClick={MainWeb} type={"button"}>Kontakt</button>
                </div>

                <div className={'loginRegisterLogout'}>

                    <div className={'login'}>
                        <h2>Załóż konto</h2>
                        <img src={Decortaion} alt=""/>
                        <div>
                            <label htmlFor="">Emial</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">Hasło</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">Powtórz hasło</label>
                            <input type="text"/>
                        </div>

                        <div>
                            <button type={'button'}>
                                Zaloguj się
                            </button>

                            <button type={'button'}>
                                Załóż konto
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Register;
