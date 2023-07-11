import React, { useEffect, useState } from "react";
import axios from "axios";

function BankTotalAccount() {
  const [transactionsData, setTransactionsData] = useState([]);

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
      <h2 className="bank-title">
        Bank Total Account:{" "}
        <span style={{ color: textColor() }}>{bankTotal}</span>
      </h2>
    </div>
  );
}

export default BankTotalAccount;
