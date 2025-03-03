import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const TransactionList = ({ user }: { user: any }) => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const getTransactions = async () => {
      if (!user) return;

      const q = query(collection(db, "transactions"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      setTransactions(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    getTransactions();
  }, [user]);

  return (
    <div className="container">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id} className="transaction-item">
            <strong>{tx.transactionName}</strong>: {tx.category} - ${tx.amount} ({tx.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
