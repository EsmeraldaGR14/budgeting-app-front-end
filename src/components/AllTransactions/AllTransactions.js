import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

function AllTransactions() {
  const [transactionsData, setTransactionsData] = useState([]);

  //   let navigate = useNavigate();

  useEffect(() => {
    fetchTransactionData();
  }, []);

  async function fetchTransactionData() {
    try {
      let { data } = await axios.get(
        "https://budgeting-app-back-end-1wo0.onrender.com/transactions"
      );
      setTransactionsData(data);
    } catch (e) {
      console.log(e);
    }
  }

  function getDate(date) {
    let newDate = new Date(date);

    const options = { month: "long" };
    let month = new Intl.DateTimeFormat("en-US", options).format(newDate);

    let day = newDate.getUTCDate();

    newDate = `${month} ${day}`;

    return newDate;
  }

  function goToTransaction(id) {
    navigate(`/transactions/${id}`);
  }

  return (
    <div>
      {transactionsData.map(({ id, itemName, amount, date }) => (
        <div key={id}>
          <table>
            <thead onClick={() => goToTransaction(id)}>
              <tr>
                <td>{getDate(date)}</td>
                <td>{itemName}</td>
                <td>{amount}</td>
              </tr>
            </thead>
          </table>
        </div>
      ))}
    </div>
  );
}

export default AllTransactions;
