import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './api/transactions.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/", router)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))


const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.BUDGET_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

app.listen(PORT, () => { console.log(`Server is on ${PORT}`);});
