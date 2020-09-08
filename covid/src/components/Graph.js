import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../api';
// import { Line, Bar } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell, Brush
} from 'recharts';


const Graph = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [daily, setDaily] = useState([]);
    
    const [firstPieActiveIndex, setFirstPieActiveIndex] = useState(0)
    const [secondPieActiveIndex, setSecondPieActiveIndex] = useState(0)

    const firstPieEnter = (data, index ) => {
        // console.log("landed onPieEnter with data ", data)
        // console.log("index is ", index)
        setFirstPieActiveIndex(index);
    }

    const secondPieEnter = (data, index) => {
        setSecondPieActiveIndex(index);
    }





    useEffect(() => {
        const getAPI = async () => {
            setDaily(await fetchDaily());
        }

        getAPI();
    }, []);

    


    // -------------------------------------------------------------------------------------------------------------
    const data = daily.map(({ date, confirmed, deaths }) => ({
        'date': (date), 'confirmed': confirmed, 'deaths': deaths
    })
    )

    const pieData = [
        { name: 'Group A', value: deaths },
        { name: 'Group B', value: recovered },
        { name: 'Group C', value: confirmed },
    ];

    const piedata1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 }
    ];

    const totalDeathsToday = () => {
        if (daily.length == 0)
            return;
        else
            return (daily[daily.length - 1].deaths)
    }


    const renderLineChart = (
        daily.length ? (
        <ResponsiveContainer width="99%" height={700}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 40, bottom: 5, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={tick => { return tick.toLocaleString(); }} />
                <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                <Legend />
                <Brush dataKey="name" height={30} stroke="#8884d8" />
                <Line dot={false} type="monotone" dataKey="confirmed" stroke="#8884d8" />
                <Line dot={false} type="monotone" dataKey="deaths" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
        ) : null
    );


    const RADIAN = Math.PI / 180;


    const PRIMARYCOLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    const SECONDARYCOLORS = ['red', 'blue']

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

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
            fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text> */}
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };



    const renderPieChart = (
        daily.length ? (
            <ResponsiveContainer width="99%" height={700}>
                <PieChart>
                    <Legend layout="horizontal" verticalAlign="top" align="center" />
                    <Pie
                        data={[
                            { name: 'Deaths', value: deaths.value },
                            { name: 'Confirmed', value: confirmed.value },
                            { name: 'Recovered ', value: recovered.value }
                        ]}
                        cy="30%"
                        cx="50%"
                        activeIndex={firstPieActiveIndex}
                        activeShape={renderActiveShape}
                        label={renderCustomizedLabel}
                        outerRadius={110}
                        labelLine={false}
                        fill="#8884d8"
                        onMouseEnter={firstPieEnter}
                    >

                        {
                            data.map((entry, index) => <Cell fill={PRIMARYCOLORS[index % PRIMARYCOLORS.length]} />)
                        }
                    </Pie>
                    <Pie
                        data={[
                            { name: `${country} Deaths`, value: deaths.value },
                            { name: 'World Dealths', value: totalDeathsToday() },
                        ]}
                        cy="75%"
                        cx="50%"
                        activeIndex={secondPieActiveIndex}
                        activeShape={renderActiveShape}
                        label={renderCustomizedLabel}
                        outerRadius={110}
                        labelLine={false}
                        fill="#8884d8"
                        onMouseEnter={secondPieEnter}
                    >
                        {
                            data.map((entry, index) => <Cell fill={SECONDARYCOLORS[index % SECONDARYCOLORS.length]} />)
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        ) : null
    )


    const print = () => {
        console.log(daily)
        console.log(totalDeathsToday())
        //console.log(data[1])
    }









    return (

        <div>
            {/* {print()} */}
            {country ? (
                <div>
                    {renderPieChart}
                    <h1> {country} has 50% of all of COVID related dealths</h1>
                </div>
             )
              : renderLineChart}
            {/* {renderPieChart} */}
            {/* {renderLineChart} */}
        </div>
    )
}

export default Graph;




