import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";

const Table = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get("http://192.168.1.98:5000/api/v1/transactions").then((res) => {
      console.log(res.data);
      setTransactions(res.data);
    });
  }, []);

  // const delete = (id) => {
  //   axios.delete
  // }

  return (
    <div className="container">
      <div className="row">
        <table className="table table-dark table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Credit or Debit</th>
              <th scope="col">Total</th>
              <th scope="col">Change</th>
              <th scope="col">Store</th>
              <th scope="col">User</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">//date</th>
              <td>debit ? debit : credit</td>
              <td>$//total</td>
              <td>$//change</td>
              <td>//store</td>
              <td>//User</td>
              <td>
                <a href="/">
                  <FontAwesomeIcon icon="edit" color="orange" />
                </a>
              </td>
              <td>
                <a href="/">
                  <FontAwesomeIcon icon="trash" color="red" />
                </a>
              </td>
            </tr> */}
            {transactions.map((transactions) => {
              return (
                <tr key={transactions._id}>
                  <th scope="row">
                    {moment(transactions.date).format("MM-DD-YYYY")}
                  </th>
                  {transactions.debit ? <td>Debit</td> : <td>Credit</td>}
                  <td>{transactions.total}</td>
                  <td>{transactions.change}</td>
                  <td>{transactions.store}</td>
                  <td>{transactions.user}</td>
                  <td>
                    <a href="/">
                      <FontAwesomeIcon icon="edit" color="orange" />
                    </a>
                  </td>
                  <td>
                    <a href="/">
                      <FontAwesomeIcon icon="trash" color="red" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
