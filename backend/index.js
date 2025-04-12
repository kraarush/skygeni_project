import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors';
import dataRoutes from "./routes/data.route.js"

configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;


// middlewares
app.use(express.json());


// cors setup
const corsOption = {
    origin: ['http://localhost:5173']
}
app.use(cors(corsOption));


// api's 
app.use('/api/v1/data', dataRoutes);


app.listen(PORT, () => {
    console.log(`Server is live on port: ${PORT}`);
});