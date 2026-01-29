//--------------Main logic of app-------------------------

import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import Transaction from "./Transaction";
import "./Home.css";

function Home() {
   // Get transactions from localStorage (if available)
   const [transactions, setTransactions] = useState(() => {
    // Initial load from localStorage (runs once)
    const saved = localStorage.getItem("transactions");
    // If found, parse JSON; else start with empty array
    return saved ? JSON.parse(saved) : [];
  });

  
  // Separate states for total expense and income
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  // Add new transaction to the list
  const addTransaction = (payload) => {
    const newTransaction = { ...payload, id: Date.now() }; // add unique id
    const updated = [...transactions, newTransaction];  // add to old list
    setTransactions(updated); // update state
  };

 
  // Delete a transaction by its id
  const deleteTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  // Calculate total income and expense
  const calculateBalance = () => {
    let exp = 0,
      inc = 0;
    transactions.forEach((txn) => {
      // If transaction is expense, add to exp else add to inc
      if (txn.type === "EXPENSE" || txn.isExpense) exp += txn.amount;
      else inc += txn.amount;
    });
    setExpense(exp);
    setIncome(inc);
  };

  
  // Run calculation every time transactions change
  useEffect(() => calculateBalance(), [transactions]);

  //  Auto-save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="home-container">
      {/* Overview shows balance, income, expense and add button */}
      <Overview
        addTransaction={addTransaction}
        income={income}
        expense={expense}
      />

      {/* Transaction component shows list of transactions */}
      <Transaction
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default Home;
