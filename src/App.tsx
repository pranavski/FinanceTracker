import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Auth from "./components/Auth";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import TransactionItem from "./components/TransactionItem";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Header />
      <Auth />
      {user ? (
        <>
          <AddTransaction user={user} />
          <TransactionList user={user} />
          <ExpenseChart transactions={[]} />
        </>
      ) : (
        <p className="text-center mt-4">Please log in to track your finances.</p>
      )}
      <Footer />
    </div>
  );
};

export default App;
