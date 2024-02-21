import express from "express";
import { SERVER_PORT } from "./Config/config.js";
import router from "./routes/router.js";
import generalError from "../Midlewares/GeneralError.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use(generalError);

app.listen(SERVER_PORT, () => {
  console.log("Server OK");
});
