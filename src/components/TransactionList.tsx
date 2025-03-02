import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const TransactionList = ({ user }: { user: any }) => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const getTransactions = async () => {
      const q = query(collection(db, "transactions"), where("userId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      setTransactions(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getTransactions();
  }, [user]);

  return (
    <ul>
      {transactions.map((tx) => (
        <li key={tx.id}>{tx.category}: ${tx.amount} ({tx.type})</li>
      ))}
    </ul>
  );
};

export default TransactionList;
