import express from "express";
import { router } from "./routes/routes";

export const app = express();

app.use(express.json());
app.use("/api/v1", router);
app.use((req,res) => {
    res.status(404).json({error: 'Endpoint not found' });   
});
