import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Auth from "./components/Auth";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">💰 Personal Finance Tracker</h1>
      <Auth />
      {user ? (
        <>
          <AddTransaction user={user} />
          <TransactionList user={user} />
        </>
      ) : (
        <p className="text-center mt-4">Please log in to track your finances.</p>
      )}
    </div>
  );
};

export default App;
