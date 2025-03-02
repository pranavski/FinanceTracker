import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddTransaction = ({ user }: { user: any }) => {
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<"income" | "expense">("expense");

  const handleAddTransaction = async () => {
    if (!amount || !category) return;

    try {
      await addDoc(collection(db, "transactions"), {
        userId: user.uid,
        amount,
        category,
        type,
        createdAt: new Date(),
      });
      setAmount(0);
      setCategory("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 bg-gray-200 rounded">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "income" | "expense")}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
};

export default AddTransaction;
