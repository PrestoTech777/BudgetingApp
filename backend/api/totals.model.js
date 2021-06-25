import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schema = new Schema({
  date: { type: Date, default: Date.now() },
  credits: Number,
  debits: Number,
  change: Number,
});

const Totals = model("total", schema);

export default Totals;
