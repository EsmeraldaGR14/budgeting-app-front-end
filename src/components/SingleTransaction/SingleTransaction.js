import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SingleTransaction() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    fetchSingleTransactionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchSingleTransactionData() {
    try {
      let { data } = await axios.get(
        `https://budgeting-app-back-end-1wo0.onrender.com/transactions/${id}`
      );

      //   console.log(transactionData);
      setTransaction(data);
    } catch (e) {
      console.log(e);
    }
  }

  function getDate() {
    let newDate = new Date(transaction.date);

    const options = { month: "long" };
    let month = new Intl.DateTimeFormat("en-US", options).format(newDate);

    let day = newDate.getUTCDate();

    let year = newDate.getUTCFullYear();

    newDate = `${month} ${day}, ${year}`;

    return newDate;
  }

  //   onClick functions
  function handleGoBack() {
    navigate("/transactions");
  }
  function handleEdit() {
    navigate(`/transactions/${id}/edit`);
  }
  function handleDelete() {
    navigate(`/transactions/${id}/delete`);
  }

  return (
    <div>
      {transaction.date && (
        <div>
          <p>Transaction ID: {transaction.id}</p>
          <p>Category: {transaction.category}</p>
          <p>Date: {getDate()}</p>
          <p>From: {transaction.from}</p>
          <p>Item Name: {transaction.itemName}</p>
          <p>Amount: ${transaction.amount}</p>
          <button onClick={handleGoBack}>Back</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default SingleTransaction;
