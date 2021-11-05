import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';



const DoughnutChart = () => {

  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() - 2);
  const stringDate = date.toString()
  const [activeData, setactiveData] = useState([]);
  const reqData = async () => {
    var getData = { stringencyData: {
      confirmed: "95",
      deaths: "2"
    }}
    getData = await axios.get(`IND/${stringDate}`);
    setactiveData(getData.data.stringencyData)
  }
  useEffect(reqData,[]);

  const Recovered = (activeData.confirmed / 100) * 98.22781;

  const deathPercent = (activeData.deaths/activeData.confirmed)*100;
  const activePercent = (activeData.confirmed - activeData.deaths - Recovered)*100/activeData.confirmed;
  const recoveredPercent = (Recovered/activeData.confirmed)*100;
  const data = {
    labels: ['Total Active Cases', 'Total Deaths', 'Total Recovered'],
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