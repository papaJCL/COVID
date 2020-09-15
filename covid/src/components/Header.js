import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '500px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    padding: {
        marginBottom: '50px',
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar color="secondary" position="fixed" >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={() => window.location.reload(false)}>
                    <i class="fas fa-biohazard"></i>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    COVID-19 Worldwide Tracker
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header