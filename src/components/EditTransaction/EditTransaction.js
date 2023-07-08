import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditTransaction.css";

function EditTransaction() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [transactionData, setTransactionData] = useState({
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  console.log(transactionData);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    try {
      let { data } = await axios.get(
        `https://budgeting-app-back-end-1wo0.onrender.com/transactions/${id}`
      );
      console.log(data);
      setTransactionData(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { itemName, amount, date, category, from } = transactionData;
    try {
      await axios.put(
        `https://budgeting-app-back-end-1wo0.onrender.com/transactions/${id}`,
        { itemName, amount, date, category, from }
      );
      console.log(itemName);
      console.log(transactionData);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Item Name</label>
        <input
          type="text"
          id="item-name"
          name="item-name"
          value={transactionData.itemName}
          //   onChange={(e) =>
          //     setTransactionData({ ...transactionData, itemName: e.target.value })
          //   }
        ></input>
        <br />
        <label>Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={transactionData.amount}
          //   onChange={(e) =>
          //     setTransactionData({ ...transactionData, amount: e.target.value })
          //   }
        ></input>
        <br />
        <label>Date</label>
        <input type="date" id="date" name="date"></input>
        <br />
        <label>From</label>
        <input
          type="text"
          id="from"
          name="from"
          value={transactionData.from}
          //   onChange={(e) =>
          //     setTransactionData({ ...transactionData, from: e.target.value })
          //   }
        ></input>
        <br />
        <label>Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={transactionData.category}
          onChange={(e) =>
            setTransactionData({ ...transactionData, category: e.target.value })
          }
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditTransaction;
