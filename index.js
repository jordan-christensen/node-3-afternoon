require('dotenv').config();
const express = require('express');
const massive = require('massive');

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
   console.log(`Server listnening on port ${SERVER_PORT}.`);
})