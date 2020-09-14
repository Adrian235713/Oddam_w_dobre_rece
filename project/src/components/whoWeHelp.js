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

                    <button type={"button"}>Fundacjom</button>
                    <button type={"button"}>Organizacjom pozarządowym</button>
                    <button type={"button"}>Lokalnym zbiórkom</button>

                </div>
                <div className={'information'}>
                    <h3>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </h3>
                </div>
                <div className={'what'}>

                    <h4>"Fundacja “Dbam o Zdrowie”</h4>
                    <h5>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h5>

                    <h4>Fundacja “Dla dzieci”</h4>
                    <h5>Cel i misja: Pomoc dzieciom z ubogich rodzin.</h5>

                    <h4>Fundacja “Bez domu”</h4>
                    <h5>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h5>

                </div>
                <div className={'buttonsNumbers'}>
                    
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>

                </div>


            </div>
        </>
    )
}
export default WhoWeHelp;