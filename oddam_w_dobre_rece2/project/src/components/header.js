import React, {Component, useState} from "react";
import Decortaion from '../assets/Decoration.svg'

const Header = () => {


    return (
        <>
            <div className={'divMianHeader'}>

                <div className={'divMianHeader1'}/>

                <div className={'divMianHeader2'}>

                    <div className={'login'}>

                        <button type={"button"}>Zaloguj</button>
                        <button type={"button"}>Załóż konto</button>

                    </div>

                    <div className={'menu'}>

                        <button type={"button"}>Start</button>
                        <button type={"button"}>O co chodzi?</button>
                        <button type={"button"}>O nas</button>
                        <button type={"button"}>Fundacje i ogranizacje</button>
                        <button type={"button"}>Kontakt</button>

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

