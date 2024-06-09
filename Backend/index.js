/*const express = require('express');
const dotenv = require('dotenv'); */

import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import cors from "cors"

import notesRoute from './route/notes.route.js'     //file ko import krke notesRoute variable mein store krenge
import userRoute from './route/user.route.js'

const app = express();

app.use(cors());
app.use(express.json()); 

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to  mongoDB
try {
   mongoose.connect(URI);
   console.log('connected to mongoDB');
} catch (error) {
    console.log("Eroor: ", error);
}

//definig routes
app.use("/notes", notesRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});