import express, { Router } from 'express';
import { getNotes } from '../controller/notes.controller.js';

const router = express.Router()

router.get("/", getNotes)    //this is the api that we created

export default router
