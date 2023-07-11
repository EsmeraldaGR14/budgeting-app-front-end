import React from "react";
import axios from "axios";
import { v4 } from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTransaction() {
  const [newTransaction, setNewTransaction] = useState({
    id: v4(),
    itemName: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  let navigate = useNavigate();

  console.log(newTransaction);

  async function createNewTransation(e) {
    e.preventDefault();

    try {
      let { id, itemName, amount, date, from, category } = newTransaction;

      console.log(newTransaction);
      axios.post(
        `https://budgeting-app-back-end-1wo0.onrender.com/transactions`,
        { id, itemName, amount, date, from, category }
      );

      setNewTransaction({
        id: v4(),
        itemName: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
      });

      navigate("/transactions");
    } catch (e) {
      console.log(e);
    }
    console.log(newTransaction);
  }

  return (
    <div className="card my-4">
      <div className="card-body">
        <form onSubmit={createNewTransation}>
          <div className="form-group">
            <label htmlFor="item-name">Item Name:</label>
            <input
              type="text"
              id="item-name"
              name="item-name"
              value={newTransaction.itemName}
              required
              onChange={(e) =>
                setNewTransaction({
                  ...newTransaction,
                  itemName: e.target.value,
                })
              }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={newTransaction.amount}
              required
              onChange={(e) =>
                setNewTransaction({
                  ...newTransaction,
                  amount: Number(e.target.value),
                })
              }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={newTransaction.date}
              placeholder="YYYY-MM-DD"
              required
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, date: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">From:</label>
            <input
              type="text"
              id="from"
              name="from"
              value={newTransaction.from}
              required
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, from: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={newTransaction.category}
              required
              onChange={(e) =>
                setNewTransaction({
                  ...newTransaction,
                  category: e.target.value,
                })
              }
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTransaction;
