import React from 'react'
import GlobalData from '../Component/GlobalData'
import HeroCrousel from '../Component/HeroCrousel'
import News from '../Component/News'
import TableCountryWise from '../Component/TableCountryWise'
export default function HomePage() {
    return (
        <div>
            <HeroCrousel/>
            <GlobalData/> 
            <TableCountryWise/>
            <News/>
        </div>
    )
} 
