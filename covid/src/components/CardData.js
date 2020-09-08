
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const CardData = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) { return 'Loading...' }
    return (
        <div>
            <br />
            <p >{"DEATHS: "}
                <CountUp start={0} end={deaths.value} duration={1.5} separator="," />
            </p>
            <p >{"RECOVERED: "}
                <CountUp start={0} end={recovered.value} duration={1.5} separator="," />
            </p>
            <p >{"CONFIRMED CASES: "}
                <CountUp start={0} end={confirmed.value} duration={1.5} separator="," />
            </p>
        </div>
    )
}

export default CardData;