import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import {flip} from 'react-animations';
import axios from "axios";
import CardGlobal from './CardGlobal';

export default function GlobalData() {

    const Bounce = styled.div`animation: 5s ${keyframes`${flip}`}`;

    const [CovidData, setCovidData] = useState([]);
    const reqData = async () => {
        const getCovidData = await axios.get("v3/stats/worldometer/global");
        setCovidData(getCovidData.data);
    };
    useEffect( reqData, []);
    return (<>
        <div className="text-6xl  sm:text-2xl flex flex-row px-10 sm:pt-10">
            <div className="h-16 w-16">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5vm5PIyNOaiAngnrd5bg6X5-3K5kWt-ZAA&usqp=CAU"
                    alt="earth" className="h-full w-full" />
            </div>
            Global Data
        </div>
        <Bounce>
        <div className="flex sm:block flex-row w-full p-10 gap-10 sm:gap-0" >
            <div className="flex-1 shadow-md sm:my-4">
               <CardGlobal CovidData={CovidData.totalNewCases} bgColor={"bg-red-100"}
                textColor={"text-red-600"} 
                bgColor2={"bg-red-200"} baseText={"New Confirmed"}/>
            </div>
            <div className="flex-1 shadow-md sm:my-2">
            <CardGlobal CovidData={CovidData.totalActiveCases} bgColor={"bg-green-100"}
             textColor={"text-green-600"}
              bgColor2={"bg-green-200"} baseText={"Total Active Cases"}/>
            </div>
            <div className="flex-1 shadow-md sm:my-2">
            <CardGlobal CovidData={CovidData.totalNewDeaths} bgColor={"bg-gray-100"}
             textColor={"text-gray-600"} bgColor2={"bg-gray-200"}
             baseText={"New Deaths"}/>
            </div>
        </div>
        <div className="flex sm:block flex-row w-full  gap-10 px-10 m-0" >
            <div className="flex-1 shadow-md sm:my-2">
            <CardGlobal CovidData={CovidData.totalConfirmed} bgColor={"bg-red-100"}
                textColor={"text-red-600"} 
                bgColor2={"bg-red-200"} baseText={"Total Confirmed"}/>
            </div>
            <div className="flex-1 shadow-md sm:my-2">
            <CardGlobal CovidData={CovidData.totalRecovered} bgColor={"bg-green-100"}
             textColor={"text-green-600"}
              bgColor2={"bg-green-200"} baseText={"Total Recovered"}/>
            </div>
            <div className="flex-1 shadow-md sm:my-2">
            <CardGlobal CovidData={CovidData.totalDeaths} bgColor={"bg-gray-100"}
             textColor={"text-gray-600"} bgColor2={"bg-gray-200"}
             baseText={"Total Deaths"}/>
            </div>

        </div>
        <div className="text-center ">Last updated: {CovidData.created}
        </div>
        </Bounce>

    </>
    )
}
