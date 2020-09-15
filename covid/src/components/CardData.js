import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from 'react';
import { Card, CardContent, Typography, Grid, CardActions } from '@material-ui/core';
import CountUp from 'react-countup';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#d88884',
        },
        secondary: {
            main: '#d88884',
        },
        error: {
            main: '#d88884',
        }
    },
});

const useStyles = makeStyles({
    root: {
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

    const renderCard = (text, value, color, textColor) => {
        return (
            <Card justifyContent="center" className={classes.root}>
                <CardContent className={color}>
                    <Typography color="textSecondary" gutterBottom variant="h5">
                        {text}
                    </Typography>
                    <Typography color={textColor} variant="h5" gutterBottom>
                        <CountUp prefix="+" start={0} end={value} duration={1.5} separator="," />
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
            <ThemeProvider theme={theme}>
                <Grid container spacing={3} justify='center'>
                    <Grid item xs={12} md={4}>
                        {renderCard("Confirmed Cases", confirmed.value, "confirmed", "primary")}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {renderCard("Deaths", deaths.value, "deaths", "secondary")}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {renderCard("Recovered", recovered.value, "recovered", "error")}
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default CardData;