import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js'
import tdlRoutes from './routes/tdl.routes.js'
const app = express();

app.use(cors());
app.use(express.json({limit: '500kb'}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cookieParser()); 

app.use("/anuragnidhi-tdl/2005/v1/users",userRoutes)
app.use("/anuragnidhi-tdl/2005/v1/tdl",tdlRoutes)


export default app;