//-----------------List of all transactions + search + delete--------------------

import React, { useEffect, useState } from "react";
import "./Transaction.css";

// Component to display each transaction row
function TransactionCell({ payload, deleteTransaction }) {
  // Destructure data from payload
  const { desc, amount, isExpense, id } = payload;

  return (
    // Add color class based on transaction type
    <div className={`cell ${isExpense ? "expense" : "income"}`}>
      {/* Transaction description */}
      
      <span>{desc}</span>

      {/* Transaction amount */}
      <span>${amount}</span>

      {/* ❌ Delete Button */}
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        ❌
      </button>
    </div>
  );
}

// Main Transaction component
function Transaction({ transactions, deleteTransaction }) {
  // Search text entered by user
  const [searchText, updateSearchText] = useState("");
  // Filtered transactions based on search
  const [filteredTransaction, updateTxn] = useState(transactions);

  // Function to filter transactions
  const filterData = (searchText) => {
    // If empty search, show all
    if (!searchText || !searchText.trim().length) {
      updateTxn(transactions);
      return;
    }

    // Otherwise, filter matching descriptions
    let txn = [...transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };

  // Re-run filter when transactions change
  useEffect(() => filterData(searchText), [transactions]);

  return (
    <div className="transaction-container">
      <h3 className="head">Transactions</h3>

      {/* Search input box */}
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />

      {/* Show list if found, otherwise "No transactions" */}
      {filteredTransaction?.length ? (
        filteredTransaction.map((payload, index) => (
          // Child Component of transaction
          <TransactionCell
            key={index}
            payload={payload}
            deleteTransaction={deleteTransaction}
          />
        ))
      ) : (
        <p id="para">No transactions found</p>
      )}
    </div>
  );
}

export default Transaction;
