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
      Totals.findOne({}, (err, total) => {
        const value = {
          debits: total.debits,
          credits: total.credits,
        };
        value.date = new Date(Date.now());
        transaction.debit === true
          ? (value.debits = Math.ceil(transaction.total) + total.debits)
          : (value.credits = Math.floor(transaction.total) + total.credits);
        value.change = transaction.change + total.change;
        console.log(value);
        Totals.findOneAndUpdate({}, value, (err, total1) => {
          res.send(total1);
        });
      });
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

router
  .route("/totals")
  .get((req, res) => {
    Totals.findOne({}, (err, totals) => {
      res.send(totals);
    });
  })
  // reset the running total
  .delete((req, res) => {
    Totals.remove({}, (err) => {
      const obj = {
        date: Date.now(),
        credits: 0,
        debits: 0,
        change: 0,
      };
      Totals.create(obj, (t) => {
        res.send(obj);
      });
    });
  });

router.route("/deletetransactions").delete((req, res) => {
  Transactions.remove({}, (err) => {
    Totals.remove({}, (err) => {
      const obj = {
        date: Date.now(),
        credits: 0,
        debits: 0,
        change: 0,
      };
      Totals.create(obj, () => {
        res.send({ reset: true });
      });
    });
  });
});

export default router;
