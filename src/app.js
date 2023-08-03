import express from "express";
import rate__router from "./routers/rate.router.js";

const app = express();

/**
 * * middlewares
 */
app.use(express.json());
app.use(express.text())

/**
 * * Router
 */

app.use(rate__router); 

export default app; 