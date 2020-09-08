import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../api'
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({

    root: {
        background: '#ffff',
        borderRadius: 3,
        border: 0,
        color: 'white',
    },
    inputRoot: {
        color: "#0D2451",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#222"
        },
    },
    clearIndicator: {
        color: "red"
    }
}));

const Countries = ({ setCountry }) => {

    const [getCountries, setGetCountries] = useState([]);

    const classes = useStyles();

    const countries = [
        { name: "Global" }
    ]

    useEffect(() => {
        const getCountries = async () => {
            setGetCountries(await fetchCountries());
        }
        getCountries();
    },
        [setGetCountries])

    const mapCountries = () => {
        let test = getCountries.map((country, i) => country)
        var len = test.length;
        for (var i = 1; i < len + 1; i++) {
            countries.push({
                name: test[i - 1]
            });
        }
    }

    const handleChange = (event, newValue) => {
        if (newValue == null) {
            setCountry("".toLowerCase())
        }
        else {
            setCountry(newValue.name.toLowerCase())
        }
    }

    return (
        <div >
            {mapCountries()}
            <Autocomplete
                onChange={handleChange}
                classes={classes}
                options={countries}
                getOptionLabel={(option) => option.name}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        placeholder="Search for a Country or Click One Below"
                        variant="outlined"
                        fullWidth
                    />
                }
            />
        </div>
    )



}

export default Countries