import React from "react";
import decortion from '../assets/Decoration.svg'
import signature from '../assets/Signature.svg'

const AboutUs = () => {

    return (
        <>
            <div className={'AboutUsMainDiv'}>

                <div className={'box_1'}>

                    <div>

                        <h2>O nas</h2>
                        <img src={decortion} alt="decortion"/>
                        <h3>
                            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                            black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                        </h3>
                        <img src={signature} alt=""/>

                    </div>

                </div>

                <div className={'box_2'}>

                </div>

            </div>
        </>
    )
}
export default AboutUs;