import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../api';
import { Line, Bar } from  'react-chartjs-2';


const Graph = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [daily, setDaily] = useState([]);

    useEffect(() => {
        const getAPI = async () => {
            setDaily(await fetchDaily());
        }

        getAPI();
    } , []);

    const lineGraph = (
        daily.length ?
            (<Line
                data={{
                    labels: daily.map(({ date }) => date),
                    datasets: [{
                        data: daily.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#333fff',
                        backgroundColor: 'rgba(15, 128, 215, .1)',
                        fill: true,
                    }, {
                        data: daily.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.2)',
                        fill: true,
                    } 
                  ],
                }}
            />) : null
    );

    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Deaths', 'Recovered', 'Infected'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'],
                  data: [deaths.value, recovered.value, confirmed.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
              hover: {mode: null},
            }}
            
          />
        ) : null
      );

    return (
        <div className="graphStyles">
            {country ? barChart : lineGraph}
        </div>
    )
}

export default Graph;