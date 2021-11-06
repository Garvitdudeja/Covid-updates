import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import { lightSpeedIn } from 'react-animations';
import axios from "axios";
import CardGlobal from './CardGlobal';

export default function GlobalData() {

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate()-1);
    const stringDate = date.toString()
    const Bounce = styled.div`animation: 5s ${keyframes`${lightSpeedIn}`}`;

    const [CovidData, setCovidData] = useState([]);
    const reqData = async () => {
        var getCovidData = {
            stringencyData: {

            }
        }
        getCovidData = await axios.get(`IND/${stringDate}`);
        setCovidData(getCovidData.data.stringencyData);
    };
    useEffect(reqData, []);
    const Recovered = (CovidData.confirmed / 100) * 98.22781;
    return (<>
        <div className="text-6xl  sm:text-2xl flex flex-row px-10 sm:pt-10">
            <div className="h-16 w-16">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5vm5PIyNOaiAngnrd5bg6X5-3K5kWt-ZAA&usqp=CAU"
                    alt="earth" className="h-full w-full" />
            </div>
            Covid Cases <span className="sm:hidden"> In</span> &nbsp;<span className="text-red-300">INDIA</span>
        </div>
        <Bounce>
            <div className="flex sm:block flex-row w-full p-10 gap-10 sm:gap-0" >
                <div className="flex-1 shadow-md sm:my-4">
                    <CardGlobal CovidData={CovidData.confirmed} bgColor={"bg-red-100"}
                        textColor={"text-red-600"}
                        bgColor2={"bg-red-200"} baseText={"Total Confirmed"} />
                </div>
                <div className="flex-1 shadow-md sm:my-2">
                    <CardGlobal CovidData={Recovered} bgColor={"bg-green-100"}
                        textColor={"text-green-600"}
                        bgColor2={"bg-green-200"} baseText={"Total Recovered Cases"} />
                </div>
                <div className="flex-1 shadow-md sm:my-2">
                    <CardGlobal CovidData={CovidData.deaths} bgColor={"bg-gray-100"}
                        textColor={"text-gray-600"} bgColor2={"bg-gray-200"}
                        baseText={"Total Deaths"} />
                </div>
            </div>
            <div className="text-center ">Last updated: {date}
            </div>
        </Bounce>

    </>
    )
}
