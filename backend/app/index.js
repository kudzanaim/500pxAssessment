const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const cors = require('cors')();

require('dotenv').config();

// App Init:
const app = express();

// Set Cors:
app.use(cors);

// Key:
const CKEY = process.env.CUSTOMER_KEY;

// URL Generator
const URL = (PARAMS)=>`https://api.500px.com/v1/photos${PARAMS}`;

// Filters
const validFilters = ['popular','highest_rated','upcoming' ,'editors','fresh_today','fresh_yesterday','fresh_today','fresh_week' ];


// Routes:
app.get('/', async(req,res)=>{
   
    return res.status(200).send(`
        <div style="width:100%; padding-top:150px; text-align:center">
            <h1 style="font-size:60px">Welcome to my 500px API</h1>
            <br/> 
            <p style="font-size: 20px;font-family: monospace;">Use the following routes to access data:</p>
            <ul style="text-align: left;margin: 0 auto;width: fit-content;font-family: monospace; color: #d01919; line-height: 20px; font-weight: bold;">
                <li>/popular/:feature_filter/:page_number</li>
                <li>/photo/:photo_id</li>
            </ul>
            <p style="font-size: 20px;font-family: monospace;">Valid filters include:</p>
            <p style="font-size: 15px;font-family: monospace; opacity:0.8">${validFilters}</p>
        </div>
    `)
});

app.get('/photo/:id', async(req,res)=>{
    const results = await axios.get( URL(`/${req.params.id}?consumer_key=${CKEY}&tags=1`) ).then(response => response).catch(error => error);

    return res.status(200).send(results.data.photo)
});

app.get('/popular/:filter/:page', async(req,res)=>{
    const {filter, page} = req.params;
    const ifFilterIsValid = validFilters.includes(filter);

    if(ifFilterIsValid){
        const results = await axios.get(URL(`?consumer_key=${CKEY}&feature=${filter}&page=${page}&rpp=20`)).then(response => response).catch(error => error);
        
        return res.status(200).send(results.data)
    }
    else{
        return res.status(200).send(`
            <div style="width:100%; padding-top:150px; text-align:center">
                <h1 style="font-size:60px">Invalid Filter</h1>
                <br/> 
                <p style="font-size: 20px;font-family: monospace;">Use one of the following filters</p>
                <p style="font-size: 15px;font-family: monospace; opacity:0.8">${validFilters}</p>
            </div>
        `)
    }
});

app.listen(process.env.PORT || 5555, (err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    } else {
        console.log(`Running on ${process.env.PORT || 5555}`)
    }
});


// Handle 404:
app.use(function(req, res) {
    res.status(404).send(`
        <div style="width:100%; padding-top:150px; text-align:center">
            <h1 style="font-size:60px">404</h1>
            <br/> 
            <p style="font-size: 20px;font-family: monospace;">Invalid Route Request</p>
        </div>
    `);
});

