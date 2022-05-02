import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        height: "100vh",
        frontFamily: 'Roboto',
    },
    appbar: {
        background: 'none',
        fontFamily: "Roboto",

    },
    icon: {
        color: '#fff',
        fontSize: '2em',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarWrapper: {
        width: "80%",
        margin: '0 auto',
    },
    colorText: {
        color: '#D8735E',    
    },
    title: {
        color: '#fff',
        fontSize: '4rem',

    },
    container: {
        textAlign: 'center',
    },
    initialcolorText: {
        color: '#C5C8CA',

    },
    goDown: {
        color: '#D8735E',
        fontSize: '4em',

    }
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() =>{
        setChecked(true);

    }, []);

    return <div className = {classes.root} id = "header">

        <AppBar className = {classes.appbar} elevation = {0}>

            <Toolbar className = {classes.appbarWrapper}>
                <h1 className = {classes.appbarTitle}> Randomness <span className = {classes.colorText}> Beacon </span> </h1>

                <IconButton>
                    <FormatListNumberedIcon className = {classes.icon}/>
                </IconButton>

            </Toolbar>

        </AppBar>

        <Collapse in={checked}
        { ...(checked ? { timeout: 1000}: {})}
        collapsedHeight = {50}
        >

            <div className = {classes.container}>
                <h1 className = {classes.title}> <span className = {classes.initialcolorText}> Publicly verifiable <br /> randomness </span> <span className = {classes.colorText}> beacon </span> 
                
                </h1>

                <Scroll to = "beacon-features" smooth = {true}>


                    <IconButton>
                        <ExpandMoreIcon className = {classes.goDown}/>

                    </IconButton>

                </Scroll>

            </div>

        </Collapse>
        
         </div>;
}