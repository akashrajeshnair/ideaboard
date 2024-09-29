import express, {Express, Request, Response} from 'express';
import { config } from './config';
import { geminiRoute } from './routes/geminiRoute';
import cors from 'cors';

const app: Express = express();
const port = config.PORT;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send("<div style='color:red'>Hello from express+node+TS server!</div>");
});

app.post('/prompt', geminiRoute);

app.listen(port, () => {
    console.log("Server started on port" + port);
});