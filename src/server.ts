import express from "express";
import config from "config";
import router from "./routes/mainRouter";
import path from "path";
import mainRouter from "./routes/mainRouter";

const port: number = config.get("PORT");
const host: string = config.get("HOST");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", mainRouter);

app.listen(port, () => {console.log(`listening to ${host+port}`)});
