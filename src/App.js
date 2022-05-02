import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Beacon from './bg3.jpg';

import Header from './components/Header';
import BeaconFeatures from './components/BeaconFeatures'

import { init, getBlockHash } from './web3Client';

const useStyles = makeStyles((theme) => ({

    root: {
        minHeight: '100vh',
        backgroundImage: `url(${Beacon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
    },

}));

export default function () {
    const classes = useStyles();

    const [hash, sethash] = useState(0);
    
    useEffect(() => {
        init();
    }, []);

    const fetchHash = () => {
        getBlockHash().then(hash => {
            sethash(hash);
        }).catch(err => {
            console.log(err);
        })

    };

    return (
        <div className = {classes.root}>
            <CssBaseline />
            <Header />
            <BeaconFeatures />
        </div>
    )
}
