import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { TextField } from '@material-ui/core'

import PublishIcon from '@material-ui/icons/Publish';

import { getBlockHash } from '../web3Client';

import RandomImage1 from '../randomness1.jpg';
import RandomImage2 from '../randomness2.jpg';

import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: "rgba(0, 0, 0, 0.5)",
        margin: "20px",

    },
    media: {
        height: 460,
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
    input: {
        color: "#000",
      },
});

export default function ImageCard2 ( { features, checked }) {

    const classes = useStyles ();

    const valueRefMin = useRef('') //creating a refernce for TextField Component
    const valueRefMax = useRef('')

    let minValue_local = 0;
    let maxValue_local = 0;

    let random_number_local = 0;

    const [hash, sethash] = useState(0);

    const [minValue, setminValue] = useState(0);
    const [maxValue, setmaxValue] = useState(0);
    const [random_number, set_random_number] = useState(0);

    const sendValue = () => {
     //on clicking button accesing current value of TextField and outputing it to console 

        minValue_local = valueRefMin.current.value;
        maxValue_local = valueRefMax.current.value;

        setminValue(minValue_local);
        setmaxValue(maxValue_local);

    };

    const fetchHash = () => {
        getBlockHash().then(hash => {
            sethash(hash);
        }).catch(err => {
            console.log(err);
        })

    };

    const randNumberComputation = () => {
        sendValue();
        fetchHash();

        const rand_in_int = parseInt(hash.toString(16), 16);
        random_number_local = (rand_in_int % (maxValue - minValue)) + parseInt(minValue);

        set_random_number(random_number_local);

        console.log(random_number);

    };

    return (

        <Collapse in={checked} { ...(checked ? { tiemout: 1000} : {})}>
        
            <Card className = {classes.root}>
                
            <CardMedia
                className = {classes.media}
                image = {RandomImage2}
                title = {features.title}
            />

            <CardContent>
                <Typography gutterBottom variant = "h5" component = "h1" className = {classes.title}>
                    {features.title}
                </Typography>

                <Typography variant = "body2" color = "textSecondary" component = "p" className = {classes.desc}>
                    {features.description}
                </Typography>

                <Typography variant = "body2" color = "textSecondary" component = "p" className = {classes.desc}>

                    <TextField label="Min value" color="secondary" focused inputRef={valueRefMin} inputProps={{ style: { color: "white" } }} />
                    <TextField label="Max value" color="secondary" focused inputRef={valueRefMax} inputProps={{ style: { color: "white" } }}/>

                    <Button endIcon={<PublishIcon />} variant = "contained" onClick = {randNumberComputation}> 
                        Enter 
                    </Button>

                    <br />

                    Random number between {minValue} and {maxValue} is {random_number}
                    

                </Typography>
            </CardContent>


                
            </Card>

        </Collapse>
    );
}

