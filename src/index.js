import app from "./app.js"
import dotevn from "dotenv"

const start = () => {
    try {
        /**
         * * enviroments
         */
        dotevn.config(); 
        const $SERVER = JSON.parse(process.env.SERVER)
        /**
         * * Server
         */
        app.listen($SERVER, () => {
            console.log(`listening: http://${$SERVER.hostname}:${$SERVER.port}`)            
        })
    }catch(err) {
        throw err.message
    }
}

start(); 