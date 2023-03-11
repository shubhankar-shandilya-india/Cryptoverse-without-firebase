import { AppBar, MenuItem, Select, Toolbar, Typography, makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "Skyblue",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

const Header = () => {

    const classes = useStyles();
    const history = useHistory();

    const {currency, setCurrency} = CryptoState();

    const darkTheme = createTheme({
        palette:{
            primary:{
                main: "#fff",
            },
            type: "dark",
        }
    })

    return (
    <ThemeProvider theme ={darkTheme}> 
        <AppBar color='transparent' position='static'>
            <container>
                <Toolbar>
                    <Typography onClick={() => history.push("/")} 
                    className={classes.title}
                    variant = 'h6'
                    >
                        Cryptoverse</Typography>
                        
                    <Select variant='outlined' style={{
                        width: 100,
                        height: 40,
                        marginRight: 15,
                    }}
                    value = {currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </container>
        </AppBar>
    </ThemeProvider>
    )
}; 

export default Header;