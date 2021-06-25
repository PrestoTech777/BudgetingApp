import express from "express";
import Transactions from "./transactions.model.js";
import Totals from "./totals.model.js";

const router = express.Router();

router
  .route("/transactions")
  .get((req, res) => {
    Transactions.find({}, (err, transaction) => {
      res.send(transaction);
    });
  })
  .post((req, res) => {
    Transactions.create(req.body, (err, transaction) => {
      res.send(transaction);
    });
  })
  .put((req, res) => {
    Transactions.findByIdAndUpdate(
      req.query.id,
      req.body,
      (err, transaction) => {
        res.send(transaction);
      }
    );
  })
  .delete((req, res) => {
    Transactions.findByIdAndRemove(req.query._id, (err, transaction) => {
      res.send({ worked: true });
    });
  });

router.route("/totals").get((req, res) => {
  Totals.find({}, (err, totals) => {
    res.send(totals);
  });
});

export default router;
