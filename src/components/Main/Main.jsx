import React from 'react'
import './Main.scss'
import LatestCourse from './LatestCourse/LatestCourse'
import Categories from './Categories/Categories'
import CtaOne from './CtaOne/CtaOne'
import CtaTwo from './CtaTwo/CtaTwo'
import Youtube from './Youtube/Youtube'
import ProSection from './ProSection/ProSection'
import Newsletter from './Newsletter/Newsletter'

const Main = () => {
    return (
        <div>
            <LatestCourse />
            <Categories />
            <CtaOne />
            <CtaTwo />
            <Youtube />
            <ProSection />
            <Newsletter />
        </div>
    )
}

export default Main
