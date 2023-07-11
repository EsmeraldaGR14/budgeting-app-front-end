import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import formatDate from "../../helpers/formatDate";
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

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    try {
      let { data } = await axios.get(
        `https://budgeting-app-back-end-1wo0.onrender.com/transactions/${id}`
      );
      setTransactionData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { itemName, amount, date, category, from } = transactionData;
    console.log(transactionData);
    // console.log(id);
    try {
      await axios.put(
        `https://budgeting-app-back-end-1wo0.onrender.com/transactions/${id}`,
        { id, itemName, amount, date, category, from }
      );

      setTransactionData({
        itemName: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
      });
      console.log(transactionData);

      navigate("/transactions");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Transaction Form</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="item-name" className="form-label">
                Item Name
              </label>
              <input
                type="text"
                id="item-name"
                name="item-name"
                value={transactionData.itemName}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    itemName: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={transactionData.amount}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    amount: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="text"
                id="date"
                name="date"
                value={formatDate(transactionData.date)}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    date: formatDate(e.target.value),
                  })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="from" className="form-label">
                From
              </label>
              <input
                type="text"
                id="from"
                name="from"
                value={transactionData.from}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    from: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={transactionData.category}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
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
    </div>
  );
}

export default EditTransaction;
