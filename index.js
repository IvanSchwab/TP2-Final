import { express } from "express";
import { SERVER_PORT } from "./Config/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));






app.listen(SERVER_PORT, ()=> {
    console.log("Server conectado")
})