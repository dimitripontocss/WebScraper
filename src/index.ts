import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routers/index";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server on! na porta ${PORT}`);
});
