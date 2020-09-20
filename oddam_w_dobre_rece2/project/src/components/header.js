import React, {Component, useState} from "react";
import Decortaion from '../assets/Decoration.svg'





const Header = () => {

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
            <div className={'divMianHeader'}>

                <div className={'divMianHeader1'}/>

                <div className={'divMianHeader2'}>

                    <div className={'login'}>

                        <button onClick={Zaloguj} cltype={"button"}>Zaloguj</button>
                        <button onClick={ZałóżKonto} type={"button"}>Załóż konto</button>

                    </div>

                    <div className={'menu'}>

                        <button onClick={MainWeb} type={"button"}>Start</button>
                        <button onClick={MainWeb} type={"button"}>O co chodzi?</button>
                        <button onClick={MainWeb} type={"button"}>O nas</button>
                        <button onClick={MainWeb} type={"button"}>Fundacje i ogranizacje</button>
                        <button onClick={MainWeb} type={"button"}>Kontakt</button>

                    </div>

                    <div className={'mainTitle'}>
                        <div>
                            <h2>Zacznij pomagać!</h2>
                            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                            <img src={Decortaion} alt="decoration"/>
                        </div>
                    </div>

                    <div className={'mainButton'}>
                        <div>
                            <button type={'button'}>ODDAJ RZECZY</button>
                            <button type={'button'}>ZORGANIZUJ ZBIÓRKĘ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;

