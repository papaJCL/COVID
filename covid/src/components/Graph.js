import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../api';
// import { Line, Bar } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const Graph = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [daily, setDaily] = useState([]);

    useEffect(() => {
        const getAPI = async () => {
            setDaily(await fetchDaily());
        }

        getAPI();
    }, []);

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
                    hover: { mode: null },
                }}

            />
        ) : null
    );


    // -------------------------------------------------------------------------------------------------------------
    const data1 = [
        {
            'date': '12-02-21', 'confirmed': 555555, 'deaths': 666666
        },
        {
            'date': '12-02-22', 'confirmed': 33333, 'deaths': 2222
        }
    ];

    //'date': date, 'confirmed': confirmed, 'deaths': deaths

    const data = daily.map(({ date, confirmed, deaths }) => ({
        'date':(date), 'confirmed': confirmed, 'deaths': deaths
    })
    )

    const renderLineChart = (
        <ResponsiveContainer width="99%" height={700}>
            <LineChart

                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dot={false} type="monotone" dataKey= "confirmed" stroke="#8884d8" />
                <Line  dot={false}type="monotone" dataKey="deaths" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );


    const print = () => {
        console.log(data1[0])
        console.log(data[1])
    }




    return (

        <div>
            {/* {country ? barChart : lineGraph} */}
            {print()}
            {renderLineChart}
        </div>
    )
}

export default Graph;