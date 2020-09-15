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
    cardContainer: {
        marginLeft: '15px',
        marginRight: '15px',
    },
});

const CardData = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    const classes = useStyles();

    const renderCard = (text, value , color) => {
        return (
            <Card justifyContent="center" className={classes.root}>
                <CardContent className={color}>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                    {text}
                    </Typography>
                    <Typography  variant="h5" component="h2" gutterBottom>
                    <CountUp start={0} end={value} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            </Card>
        )
    }


    if (!confirmed) { return 'Loading...' }
    return (
        <div className="cardContainer cardGrid">
        <Grid container spacing={3}  justify='center'>
            <Grid item xs={12} md={4}>
            {renderCard("CONFIRMED CASES" , confirmed.value , "confirmed")}
            </Grid>
            <Grid item xs={12} md={4}>
            {renderCard("DEATHS" , deaths.value, "deaths")}
            </Grid>
            <Grid item xs={12} md={4}>
            {renderCard("RECOVERED" , recovered.value, "recovered")}
            </Grid>
        </Grid>
        </div>
    )
}

export default CardData;