import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function CountryMap(props) {
    
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate()-2);
    const stringDate = date.toString()

    const [CovidData, setCovidData] = useState([]);
    const reqData = async () => {
        var getCovidData = {
            stringencyData: {
            }
        }
        getCovidData = await axios.get(`${props.data}/${stringDate}`);
        setCovidData(getCovidData.data.stringencyData);
    };
    useEffect(reqData, []);
    return (
            <tr>
                <td>{props.i}</td>
                <td>{props.data}</td>
                <td>{CovidData.confirmed}</td>
                <td>{CovidData.deaths}</td>
            </tr>
   
    )
}
