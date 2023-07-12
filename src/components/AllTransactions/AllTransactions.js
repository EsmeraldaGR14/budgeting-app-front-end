import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import formatDate from "../../helpers/formatDate";
import formatLongDate from "../../helpers/formatLongDate";
// import "./styles.css";

function AllTransactions() {
  const [transactionsData, setTransactionsData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetchTransactionData();
  }, []);

  async function fetchTransactionData() {
    try {
      let { data } = await axios.get(
        "https://budgeting-app-back-end-1wo0.onrender.com/transactions"
      );

      console.log(data);
      setTransactionsData(data);
    } catch (e) {
      console.log(e);
    }
  }

  function goToTransaction(id) {
    navigate(`/transactions/${id}`);
  }

  async function handleDelete(id) {
    try {
      await axios.delete(
        `https://budgeting-app-back-end-1wo0.onrender.com/transactions/${id}`
      );

      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }

  function getTransactionsBankTotal() {
    console.log(transactionsData);

    let amountArr = [];
    transactionsData.map(({ amount }) => amountArr.push(Number(amount)));
    let sum = 0;

    for (let i = 0; i < amountArr.length; i++) {
      sum += amountArr[i];
    }

    return sum;
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div className="card">
        <div className="card-body">
          <table className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Date</th>
                <th>Item Name</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactionsData.map(({ id, itemName, amount, date }) => (
                <tr
                  key={id}
                  className="table-row"
                  onClick={() => goToTransaction(id)}
                >
                  <td>{formatLongDate(date)}</td>
                  <td>{itemName}</td>
                  <td>{amount}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllTransactions;
