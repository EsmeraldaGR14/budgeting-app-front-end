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
    <div>
      <form onSubmit={createNewTransation}>
        <label>Item Name:</label>
        <input
          type="text"
          id="item-name"
          name="item-name"
          value={newTransaction.itemName}
          onChange={(e) => {
            setNewTransaction({
              ...newTransaction,
              itemName: e.target.value,
            });
          }}
        />
        <label>Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newTransaction.amount}
          onChange={(e) => {
            setNewTransaction({
              ...newTransaction,
              amount: Number(e.target.value),
            });
          }}
        />
        <label>Date:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={newTransaction.date}
          placeholder="YYYY-MM-DD"
          onChange={(e) => {
            setNewTransaction({
              ...newTransaction,
              date: e.target.value,
            });
          }}
        />
        <label>From:</label>
        <input
          type="text"
          id="from"
          name="from"
          value={newTransaction.from}
          onChange={(e) => {
            setNewTransaction({
              ...newTransaction,
              from: e.target.value,
            });
          }}
        />
        <label>Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={newTransaction.category}
          onChange={(e) => {
            setNewTransaction({
              ...newTransaction,
              category: e.target.value,
            });
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewTransaction;
