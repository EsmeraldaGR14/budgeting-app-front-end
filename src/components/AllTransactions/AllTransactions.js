import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import formatDate from "../../helpers/formatDate";

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

  const bankTotal = getTransactionsBankTotal();

  function textColor() {
    if (bankTotal > 100) {
      return "green";
    } else if (bankTotal < 0) {
      return "red";
    } else {
      return "yellow";
    }
  }

  return (
    <div>
      <h2>
        Bank Total Account:{" "}
        <span style={{ color: textColor() }}>{bankTotal}</span>
      </h2>
      {transactionsData.map(({ id, itemName, amount, date }) => (
        <div key={id}>
          <table>
            <thead onClick={() => goToTransaction(id)}>
              <tr>
                <td>{formatDate(date)}</td>
                <td>{itemName}</td>
                <td>{amount}</td>
              </tr>
            </thead>
          </table>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AllTransactions;
