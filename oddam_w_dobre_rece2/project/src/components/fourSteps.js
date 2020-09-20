import React from "react";
import Decoration from '../assets/Decoration.svg';
import tshirt from '../assets/tshirt.png';
import bag from  '../assets/bag.png';
import loupe from '../assets/loupe.png';
import circle from '../assets/circle.png';

const FourSteps = () => {

    return (
        <>
            <div className={'FourStepsMainDiv'}>

                <div className={'box_1'}>
                    <div className={'box'}>
                        <h2>10</h2>
                        <h3>ODDANYCH WORKÓW</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis corporis cupiditate
                            dolores doloribus, dolorum excepturi id ipsa ipsam ipsum labore molestiae natus obcaecati
                            odit perferendis quos rerum totam vero.</p>
                    </div>
                    <div className={'box'}>
                        <h2>5</h2>
                        <h3>WSPARTYCH ORGANIZACJI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur delectus
                            distinctio, dolorem, dolores ducimus eligendi, esse iusto molestias necessitatibus neque
                            odio officia perferendis provident quis sequi suscipit vel voluptate.</p>
                    </div>
                    <div className={'box'}>
                        <h2>7</h2>
                        <h3>ZORGANIZOWANY ZBIÓREK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at dignissimos dolorum excepturi
                            ipsam ipsum labore libero molestiae pariatur veritatis. Laudantium molestias quis
                            repellendus rerum. Dolorem fugit laborum minus nesciunt!</p>
                    </div>
                </div>

                <div className={'box_2'}>
                    <h2>Wystarczą 4 proste kroki</h2>
                    <img src={Decoration} alt="Decoration"/>
                </div>

                <div className={'box_2'}>

                </div>
                <div className={'box_3'}>
                    <div>
                        <img src={tshirt} alt="tshirt"/>
                        <h2>Wybierz rzeczy</h2>
                        <h3>ubrania, zabawki, sprzęt i inne</h3>

                    </div>
                    <div>
                        <img src={bag} alt="bag"/>
                        <h2>Spakuj je</h2>
                        <h3>skorzystaj z worków na śmieci</h3>
                    </div>
                    <div>
                        <img src={loupe} alt="bag"/>
                        <h2>Zdecyduj komu chcesz pomóc</h2>
                        <h3>wybierz zaufane miejsce</h3>
                    </div>

                    <div>
                        <img src={circle} alt="bag"/>
                        <h2>wybierz zaufane miejsce</h2>
                        <h3>kurier przyjedzie w dogodnym terminie</h3>
                    </div>
                </div>
                <div className={'box_4'}>
                    <div>
                        <button type={"button"}>ODDAJ RZECZY</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FourSteps;