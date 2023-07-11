import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import formatLongDate from "../../helpers/formatLongDate";

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
      setTransaction(data);
    } catch (e) {
      console.log(e);
    }
  }

  //   onClick functions
  function handleGoBack() {
    navigate("/transactions");
  }

  function handleEdit() {
    navigate(`/transactions/${id}/edit`);
  }

  async function handleDelete() {
    try {
      axios.delete(
        `https://budgeting-app-back-end-1wo0.onrender.com/transactions/${id}`
      );

      navigate("/transactions");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      {transaction.date && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Transaction Details</h5>
            <p className="card-text">Transaction ID: {transaction.id}</p>
            <p className="card-text">Category: {transaction.category}</p>
            <p className="card-text">
              Date: {formatLongDate(transaction.date)}
            </p>
            <p className="card-text">From: {transaction.from}</p>
            <p className="card-text">Item Name: {transaction.itemName}</p>
            <p className="card-text">Amount: ${transaction.amount}</p>
            <button className="btn btn-primary" onClick={handleGoBack}>
              Back
            </button>
            <button className="btn btn-warning" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleTransaction;
