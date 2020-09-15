import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../api';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell, Brush, Text
} from 'recharts';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import 'fontsource-roboto';
import { Container } from 'reactstrap';

const useStyles = makeStyles(() => ({
    paperPadding: {
        marginBottom: '10px',
        marginLeft: '15px',
        marginRight: '15px',
    },
}))





const Graph = ({ data: { confirmed, recovered, deaths }, country }) => {

    const classes = useStyles()

    const [daily, setDaily] = useState([]);

    const [isAnimation, setIsAnimation] = useState(true);

    const RADIAN = Math.PI / 180;

    const PRIMARYCOLORS = ['#d88884', '#84d4d8', '#84d888'];

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
            <Paper className={classes.paperPadding}>
                <Typography variant="h4" align="center" color="textSecondary" gutterBottom>
                    GLOBAL STATISTICS  <button >HI</button>
                    </Typography>
                <ResponsiveContainer width="100%" height={550}>
                    <LineChart data={data} margin={{ top: 5, right: 40, left: 45, bottom: 5, }} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" height={90} tick={<CustomizedAxisTick />} />
                        <YAxis tickFormatter={tick => { return tick.toLocaleString(); }} />
                        <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                        <Legend verticalAlign="bottom" height={36} />
                        {/* <Brush dataKey="name" height={30} verticalAlign="bottom" stroke="green" /> */}
                        <Line dot={false} type="monotone" dataKey="confirmed" stroke="#84d4d8" />
                        <Line dot={false} type="monotone" dataKey="deaths" stroke="#d88884" />
                    </LineChart>
                </ResponsiveContainer>
            </Paper>
        ) : null
    );

    const renderPieChart = (

        daily.length ? (
            <ResponsiveContainer width="100%" height={400} key="makeid()">
                <PieChart>
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
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
                    <Paper className={classes.paperPadding}>
                        <Typography align="center" variant="h4" color="textSecondary" gutterBottom>
                            {country.toUpperCase()}
                        </Typography>
                        {renderPieChart}
                        <br />
                        <Typography variant="overline" align="center" component="h2" color="#e0e0e0" gutterBottom>
                            {country.charAt(0).toUpperCase() + country.slice(1)} has {(deaths.value / totalDeathsToday()).toFixed(4) * 100}% of all of COVID related dealths
                    </Typography>
                    </Paper>
                </div>

            )
                : renderLineChart}
        </div>
    )
};

export default Graph;




