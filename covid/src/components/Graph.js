import React, { useState, useEffect } from 'react';
import { fetchDaily, getData } from '../api';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell, Brush, Text
} from 'recharts';
import { Typography, Paper, ButtonGroup, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import 'fontsource-roboto';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
    paperPadding: {
        marginBottom: '10px',
        marginLeft: '15px',
        marginRight: '15px',
    },
    buttonAlignment: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: "25px",
    }
}))





const Graph = ({ data: { confirmed, recovered, deaths }, country , totalDeaths }) => {

    const classes = useStyles()

    const [daily, setDaily] = useState([]);

    const [modifiedDaily, setModifiedDaily] = useState([])

    const [alignment, setAlignment] = useState('right');

    const [isAnimation, setIsAnimation] = useState(true);

    const RADIAN = Math.PI / 180;

    useEffect(() => {
        const getAPI = async () => {
            const initialDayData = await fetchDaily();

            setDaily(initialDayData);


            //This fixes the break if a 502 error pops up
            if (daily.length != 0)
                setModifiedDaily(initialDayData);
            
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
    const data = modifiedDaily.map(({ date, confirmed, deaths }) => ({
        'date': (date), 'confirmed': confirmed, 'deaths': deaths
    }))


    const CustomizedAxisTick = (props) => {

        const { x, y, stroke, payload } = props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" >{payload.value.substring(5)}</text>
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

    const handleClick = (slicedNum) => {
        if (slicedNum) {
            let newDaily = daily.slice(-slicedNum)
            setModifiedDaily(newDaily);
        }
        else {
            setModifiedDaily(daily);
        }
    }



    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const renderLineChart = (

        daily.length ? (
            <div>
                <Paper className={classes.paperPadding}>
                    <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                        COVID-19 Daily Reports
                </Typography>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        className={classes.buttonAlignment}
                        size="small"
                    >
                        <ToggleButton value="leftleft" onClick={() => handleClick(5)}>
                            5D
                        </ToggleButton >
                        <ToggleButton value="left" onClick={() => handleClick(30)}>
                            1M
                        </ToggleButton >
                        <ToggleButton value="center" onClick={() => handleClick(180)}>
                            6M
                        </ToggleButton >
                        <ToggleButton value="right" onClick={() => handleClick()}>
                            YTD
                    </ToggleButton >
                    </ToggleButtonGroup>
                    <ResponsiveContainer width="100%" height={500}>
                        <LineChart data={data} margin={{ top: 5, right: 40, left: 45, bottom: 5, }} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" height={90} tick={<CustomizedAxisTick />} />
                            <YAxis tickFormatter={tick => { return tick.toLocaleString(); }} />
                            <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                            <Legend verticalAlign="bottom" height={36} />
                            <Line dot={false} type="monotone" dataKey="confirmed" stroke="#84d4d8" />
                            <Line dot={false} type="monotone" dataKey="deaths" stroke="#d88884" />
                        </LineChart>
                    </ResponsiveContainer>
                </Paper>
            </div>
        ) : render502error()
    );

    function render502error(){
        return(
            <div>
            <center>
            <p> The API <i>https://covid19.mathdro.id/api/daily </i>   
            is <a href="https://covid19.mathdro.id/api/daily">currently down</a>
            </p>
            <p> Line Chart won't render untill it's back up</p>
            </center>
            </div>
        )
    }


    const renderPieChart = (

        confirmed ? (
            <ResponsiveContainer width="100%" height={400} key="makeid()">
                <PieChart>
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                    <Pie
                        data={[
                            { name: 'Deaths', value: deaths.value, fill: '#d88884' },
                            { name: 'Infected', value: confirmed.value, fill: '#84d4d8' },
                            { name: 'Recovered ', value: recovered.value, fill: '#84d888' }
                        ]}

                        stroke="none"
                        cx="50%"
                        isAnimationActive={isAnimation}
                        onAnimationEnd={() => setIsAnimation(false)}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        labelLine={false}
                        fill="#8884d8"
                        dataKey="value"
                    >
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
                            {country.charAt(0).toUpperCase() + country.slice(1)} has {(deaths.value / totalDeaths).toFixed(4) * 100}% of all of COVID related dealths
                    </Typography>
                    </Paper>
                </div>

            )
                : renderLineChart}
        </div>
    )
};

export default Graph;




