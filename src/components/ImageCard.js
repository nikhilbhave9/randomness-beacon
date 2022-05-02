import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RandomImage1 from '../randomness1.jpg';
import RandomImage2 from '../randomness2.jpg';

import { Collapse } from '@material-ui/core';
import { collectHashes, getBlockHash } from '../web3Client';

import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: "rgba(0, 0, 0, 0.5)",
        margin: "20px",

    },
    media: {
        height: 400,
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "2rem",
        color: "#fff",
    },
    desc: {
        fontFamily: "Roboto",
        fontSize: "1.1rem",
        color: '#ddd',

    },
});

export default function ImageCard ( { features, checked }) {

    const classes = useStyles ();
    const [hash, sethash] = useState(0);

    const fetchHash = () => {
        getBlockHash().then(hash => {
            sethash(hash);
        }).catch(err => {
            console.log(err);
        })

        console.log("The type is: ", typeof hash);
    };

    return (


        <Collapse in={checked} { ...(checked ? { tiemout: 1000} : {})}> 
            <Card className = {classes.root}>
                
            <CardMedia
                className = {classes.media}
                image = {RandomImage1}
                title = {features.title}
            />

            <CardContent>
                <Typography gutterBottom variant = "h5" component = "h1" className = {classes.title}>
                    {features.title}
                </Typography>

                <Typography variant = "body2" color = "textSecondary" component = "p" className = {classes.desc}>
                    {features.description}
                </Typography>

                <br />

                <Typography variant = "body2" color = "textSecondary" component = "p" className = {classes.desc}>
                    Random number in hex: {hash} <br />
                    Random number integer: {parseInt(hash.toString(16), 16)}
                    <br />

                    <Button endIcon={<RefreshIcon />} variant = "contained" onClick = {() => {
                        fetchHash();
                    }
                    }>

                    Generate

                    </Button>
                </Typography>
            </CardContent>
                
            </Card>

        </Collapse>
    );
}

