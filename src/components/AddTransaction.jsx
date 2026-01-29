//----------Form to add new entry-----------------

import React, { useState } from "react";
import "./AddTransaction.css";

function AddTransaction(props) {
  // States for form inputs
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE"); // default type


  // Function runs when "Add Transaction" button is clicked
  const handleAddTransaction = () => {

     // Validation: all fields must be filled
    if (!amount || !desc) {
      alert("Please fill all fields");
      return;
    }

    // Create new transaction object
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      isExpense: type === "EXPENSE",
      id: Date.now(),
    });

    // Close the form after adding
    props.toggleAddtxn();
  };

  return (
    <div className="add-trxn-container">
       {/* Input for amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

        {/* Input for description */}
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      {/* Radio buttons for type selection */}
      <div className="radio-btn">
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>

        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </div>

      {/* Submit button */}
      <button onClick={handleAddTransaction} className="add-transaction">
        Add Transaction
      </button>
    </div>
  );
}

export default AddTransaction;
