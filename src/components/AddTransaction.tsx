import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddTransaction = ({ user }: { user: any }) => {
  const [type, setType] = useState<"income" | "expense">("expense");
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  const [transactionName, setTransactionName] = useState<string>("");

  const handleAddTransaction = async () => {
    if (!amount || !category || !transactionName) return;

    try {
      await addDoc(collection(db, "transactions"), {
        userId: user.uid,
        type,
        category,
        amount: Number(amount),
        transactionName,
        createdAt: new Date(),
      });
      setType("expense");
      setCategory("");
      setAmount("");
      setTransactionName("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Add Transaction</h2>
      <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input
        type="text"
        placeholder="Category (e.g., Groceries, Rent)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Transaction Name"
        value={transactionName}
        onChange={(e) => setTransactionName(e.target.value)}
      />
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
};

export default AddTransaction;
