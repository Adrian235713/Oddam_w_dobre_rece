import React from "react";
import decoration from '../assets/Decoration.svg'

const WhoWeHelp = () => {

    return (
        <>
            <div className={'whoWeHelpMainDiv'}>

                <div className={'title'}>
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} alt="decoration"/>

                </div>
                <div className={'choose'}>

                    <div>
                        <button type={"button"}>Fundacjom</button>
                        <button type={"button"}>Organizacjom pozarządowym</button>
                        <button type={"button"}>Lokalnym zbiórkom</button>
                    </div>

                </div>
                <div className={'information'}>
                    <div>
                        <h3>
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </h3>

                    </div>
                </div>
                <div className={'what'}>


                    <div>
                        <h4>"Fundacja “Dbam o Zdrowie”</h4>
                        <h5>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h5>

                        <h4>Fundacja “Dla dzieci”</h4>
                        <h5>Cel i misja: Pomoc dzieciom z ubogich rodzin.</h5>

                        <h4>Fundacja “Bez domu”</h4>
                        <h5>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h5>

                    </div>

                    <div>
                        <h6>ubrania, jedzenie, sprzęt AGD, meble, zabawki</h6>
                        <h6>ubrania, meble, zabawki</h6>
                        <h6>ubrania, jedzenie, ciepłe koce</h6>
                    </div>



                </div>
                <div className={'buttonsNumbers'}>

                    <div>
                        {/*<button>1</button>*/}
                        {/*<button>2</button>*/}
                        {/*<button>3</button>*/}
                    </div>

                </div>


            </div>
        </>
    )
}
export default WhoWeHelp;