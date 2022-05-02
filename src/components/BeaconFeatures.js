import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ImageCard from './ImageCard';
import ImageCard2 from './ImageCard2';
import features from "../static/features";
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles ((theme) => ({
    root: {
        minHeight: '70vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },

}));

export default function () {
    const classes = useStyles();

    const checked = useWindowPosition('header');

    return (
        <div className = {classes.root} id = "beacon-features">

            <ImageCard features = {features[0]} checked = {checked}/>
            <ImageCard2 features = {features[1]} checked = {checked}/>

        </div>
    )
}