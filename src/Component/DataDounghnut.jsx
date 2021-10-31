import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';



const DoughnutChart = () => {
  const [activeData, setactiveData] = useState([]);
  const reqData = async () => {
    const getData = await axios.get("v3/stats/worldometer/global");
    setactiveData(getData.data)
  }
  useEffect(reqData,[]);


  const total = activeData.totalActiveCases+activeData.totalRecovered+activeData.totalDeaths;
  const deathPercent = (activeData.totalDeaths/total)*100;
  const activePercent = (activeData.totalActiveCases/total)*100;
  const recoveredPercent = (activeData.totalRecovered/total)*100;
  const data = {
    labels: ['Total Active Cases', 'Total Deaths', 'Total Recovered',],
    datasets: [
      {
        label: '# of Votes',
        data: [activePercent, deathPercent, recoveredPercent],
        backgroundColor: [
          'rgba(255, 60, 98, 0.7)',
          'rgba(0 ,0 ,0 ,0.6)',
          'rgba(0,255,0, 0.6)',
        ],
        borderColor: [
          'rgba(255, 60, 98,1)',
          'rgba(0 ,0 ,0 ,1)',
          'rgba(0,255,0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>Doughnut Chart</h1>
      </div>
      <Doughnut data={data} />
    </>
  );
}

export default DoughnutChart;