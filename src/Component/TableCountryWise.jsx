import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';
import DoughnutChart from './DataDounghnut';
import CountryMap from './CountryMap';

export default function TableCountryWise() {
    const Country = ["ABW","AFG","AGO","AND","ARE","ARG",
    "AUS","AUT","AZE","BDI","BEL","BEN","BFA","BGD","BGR","BHR","BHS","BIH","BLR","BLZ",
    "BMU","BOL","BRA","BRB","BRN","BTN","BWA","CAF","CAN","CHE","CHL","CHN","CIV","CMR","COD",
    "COG","COL","CPV","CRI","CUB","CYP","CZE","DEU","DJI","DMA","DNK","DOM","DZA","ECU","EGY",
    "ERI","ESP","EST","ETH","FIN","FJI","FRA","FRO","GAB","GBR","GEO","GHA","GIN","GMB","GRC",
    "GRL","GTM","GUM","GUY","HKG","HND","HRV","HTI","HUN","IDN","IND","IRL","IRN","IRQ","ISL",
    "ISR","ITA","JAM","JOR","JPN","KAZ","KEN","KGZ","KHM","KIR","KOR","KWT","LAO","LBN","LBR",
    "LBY","LIE","LKA","LSO","LTU","LUX","LVA","MAC","MAR","MCO","MDA","MDG","MEX","MLI","MLT",
    "MMR","MNG","MOZ","MRT","MUS","MWI","MYS","NAM","NER","NGA","NIC","NLD","NOR","NPL","NZL",
    "OMN","PAK","PAN","PER","PHL","PNG","POL","PRI","PRT","PRY","PSE","QAT","RKS","ROU","RUS",
    "RWA","SAU","SDN","SEN","SGP","SLB","SLE","SLV","SMR","SOM","SRB","SSD","SUR","SVK","SVN",
    "SWE","SWZ","SYC","SYR","TCD","TGO","THA","TJK","TKM","TLS","TON","TTO","TUN","TUR","TWN",
    "TZA","UGA","UKR","URY","USA","UZB","VEN","VIR","VNM","VUT","YEM","ZAF","ZMB","ZWE"]
    var i=1;


    return (<>
        <div className="text-center pt-5 flex  flex-col w-full justify-items-center">
            <h1 className="font-bold text-4xl sm:text-sm">Country Wise Covid Data</h1>
            <div>
                <div className="flex sm:flex-col-reverse sm:justify-center sm:gap-5 sm:items-center justify-center pt-4 shadow-md  ">
                    <div className="cursor-pointer max-h-96 overflow-scroll w-full sm:w-4/5  overflow-x-hidden md:m-10">
                        <Table striped bordered hover size="sm" className="  sm:text-xs ">
                            <thead>
                                <tr>
                                    <th>Sr no.</th>
                                    <th>Country</th>
                                    <th>Total Confirmed</th>
                                    <th>Total Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Country.map((data) => {
                                    i++

                                    return (<CountryMap data={data} i={i}/>)
                                })}
                            </tbody>

                        </Table>
                    </div>
                    <div className="sm:w-3/4 w-2/5 pl-10 pr-10 h-full">
                        <DoughnutChart /></div>
                </div>
            </div>

        </div>
    </>)
}
