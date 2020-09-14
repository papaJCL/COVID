import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import { Card, CardContent, Typography, Grid , CardActions } from '@material-ui/core';
import CountUp from 'react-countup';




const useStyles = makeStyles({
    root: {
        boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)',
        marginTop: '5px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CardData = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    const classes = useStyles();

    const renderCard = (text, value , color) => {
        return (
            <Card className={classes.root}>
                <CardContent className={color}/>
                <CardContent>
                    {text}
                </CardContent>
                <CardContent>
                    <CountUp start={0} end={value} duration={1.5} separator="," />
                </CardContent>
                <CardContent>
                    {new Date(lastUpdate).toDateString()}
                </CardContent>
            </Card>
        )
    }


    if (!confirmed) { return 'Loading...' }
    return (
        <Grid container spacing={1}  justify='center'>
            <Grid item md={3}>
            {renderCard("CONFIRMED CASES" , confirmed.value , "confirmed")}
            </Grid>
            <Grid item md={3}>
            {renderCard("DEATHS" , deaths.value, "deaths")}
            </Grid>
            <Grid item md={3}>
            {renderCard("RECOVERED" , recovered.value, "recovered")}
            </Grid>
        </Grid>
    )
}

export default CardData;