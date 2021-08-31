import React from 'react'
import { Hero } from '../../components'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'

const Home = () => {
    return (
        <div>
            <Hero {...homeObjOne}/>
            <Hero {...homeObjTwo}/>
            <Hero {...homeObjThree}/>
            <Hero {...homeObjFour}/>
        </div>
    )
}

export default Home
