import React from 'react'

const Hero = ({lightBg,imgStart,img}) => {
    return (
        <>
            <section className={`hero-section ${lightBg ?'bg-white text-gray-600':'bg-primary text-white'}`}>
                <div className={`hero-container ${imgStart ? 'md:flex-row-reverse gap-14':'flex-row'}`}>
                    <div className={`hero-wrapper`}>
                        <h1 className={`hero-title ${lightBg ? 'bg-white text-gray-900':'text-white'}`}>Before they sold out
                            <br className="hero-br" />readymade gluten
                        </h1>
                        <p className="hero-paragraph">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="hero-btn-primary">Button</button>
                            <button className="hero-btn-secondary">Button</button>
                        </div>
                    </div>
                    <div className="hero-img-wrapper">
                        <img className="hero-img" alt="hero" src={img}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
