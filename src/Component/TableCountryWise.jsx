import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap';
import DoughnutChart from './DataDounghnut';

export default function TableCountryWise() {
    const [CountryData, setCountryData] = useState([]);
    const reqData = async () => {
        const reqCountryData = await axios.get("v3/stats/worldometer/country")
        setCountryData(reqCountryData.data);
        console.log(CountryData);
    };
    useEffect(reqData, []);
    const country = [];
    var i = 1;


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
                                    <th>Total Recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CountryData.map((data) => {
                                    if (i < 50) return (<tr>
                                        <td>{i++}</td>
                                        <td>{data.country}</td>
                                        <td>{data.totalConfirmed}</td>
                                        <td>{data.totalRecovered}</td>
                                    </tr>)

                                })}
                            </tbody>
                            <h1>{country}</h1>

                        </Table>
                    </div>
                    <div className="sm:w-3/4 w-2/5 pl-10 pr-10 h-full">
                        <DoughnutChart /></div>
                </div>
            </div>

        </div>
    </>)
}
