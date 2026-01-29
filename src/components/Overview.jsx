// -----------Shows totals and add transaction button----------------

import React, { useState } from "react";
import "./Overview.css";
import AddTransaction from "./AddTransaction";

function Overview(props) {
  // Control if AddTransaction form is visible or not
  const [isAddTxnVisible, toggleAddtxn] = useState(false);
  return (
    <div className="over-container">
      <div className="balance-box">
        {/* Show balance: income - expense */}
        Balance: ${props.income-props.expense}

        {/* Button to show or hide AddTransaction form */}
        <button
          onClick={() => toggleAddtxn(!isAddTxnVisible)}
          className="add-transaction-btn"
        >
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </button>
      </div>

      {/* If Add form is visible, render the AddTransaction component */}
      {isAddTxnVisible && (
        <AddTransaction
          toggleAddtxn={toggleAddtxn}
          addTransaction={props.addTransaction}
        />
      )}

      {/* Boxes for showing total expense and income */}
      <div className="expense-container">
        <div className="expense-box expense">
          Expense
          <span>${props.expense}</span>
        </div>

        <div className="expense-box income">
          Income
          <span>${props.income}</span>
        </div>
      </div>
    </div>
  );
}

export default Overview;
