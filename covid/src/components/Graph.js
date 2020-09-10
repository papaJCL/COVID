import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../api';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell, Brush, Text
} from 'recharts';


const Graph = React.memo(({ data: { confirmed, recovered, deaths }, country }) => {

    const [daily, setDaily] = useState([]);

    const [isAnimation, setIsAnimation] = useState(true);

    const RADIAN = Math.PI / 180;

    const PRIMARYCOLORS = ['#ff3300', '#0066ff', '#00b300'];

    useEffect(() => {
        const getAPI = async () => {
            setDaily(await fetchDaily());
        }

        getAPI();
    }, []);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };




    // -------------------------------------------------------------------------------------------------------------
    const data = daily.map(({ date, confirmed, deaths }) => ({
        'date': (date), 'confirmed': confirmed, 'deaths': deaths
    })
    )

    const totalDeathsToday = () => {
        if (daily.length == 0)
            return;
        else
            return (daily[daily.length - 1].deaths)
    }

    const CustomizedAxisTick = (props) => {

        const { x, y, stroke, payload } = props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
            </g>
        );
    }

    const yAxisLabel = ({ axisType, x, y, width, height, stroke, children }) => {
        const isVert = axisType === 'yAxis';
        const cx = isVert ? x : x + (width / 2);
        const cy = isVert ? (height / 2) + y : y + height + 10;
        const rot = isVert ? `270 ${cx} ${cy}` : 0;
        return (
          <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
            {children}
          </text>
        );
      };



    const renderLineChart = (
        daily.length ? (
            <ResponsiveContainer width="99%" height={700}>
                <LineChart data={data} margin={{ top: 5, right: 40, left: 45, bottom: 5, }} >
                    <CartesianGrid strokeDasharray="3 3"  />
                    <XAxis dataKey="date" height={90} tick={<CustomizedAxisTick />} />
                    <YAxis  tickFormatter={tick => { return tick.toLocaleString(); }} />
                    <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                    <Legend verticalAlign="top" height={36} />
                    <Brush dataKey="name" height={30} stroke="green" />
                    <Line dot={false} type="monotone" dataKey="confirmed" stroke="#0066ff" />
                    <Line dot={false} type="monotone" dataKey="deaths" stroke="#ff3300" />
                </LineChart>
            </ResponsiveContainer>
        ) : null
    );

    const renderPieChart = (

        daily.length ? (
            <ResponsiveContainer width="99%" height={400} key="makeid()">
                <PieChart>
                    <Legend layout="horizontal" verticalAlign="top" align="center" />
                    <Pie
                        data={[
                            { name: 'Deaths', value: deaths.value },
                            { name: 'Confirmed', value: confirmed.value },
                            { name: 'Recovered ', value: recovered.value }
                        ]}
                        
                        stroke="none"
                        cx="50%"
                        isAnimationActive={isAnimation}
                        onAnimationEnd={() => setIsAnimation(false)}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        labelLine={false}
                        fill="#8884d8"
                    >

                        {
                            data.map((entry, index) => <Cell fill={PRIMARYCOLORS[index % PRIMARYCOLORS.length]} />)
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        ) : null
    )

    return (

        <div>
            {country ? (
                <div>
                    {renderPieChart}
                    <h1> {country} has {(deaths.value / totalDeathsToday()).toFixed(4) * 100}% of all of COVID related dealths</h1>
                </div>

            )
                : renderLineChart}
        </div>
    )
});

export default Graph;




