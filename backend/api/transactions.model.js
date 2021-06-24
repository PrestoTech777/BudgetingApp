import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema({
    date: Date,
    debit: Boolean,
    total: Number,
    change: Number,
    description: String,
    store: String,
    user: String
})

const Transactions = model('transaction', schema);

export default Transactions;