import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Auth from "./components/Auth";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>💰 Personal Finance Tracker</h1>
      <Auth />
      {user ? (
        <>
          <AddTransaction user={user} />
          <TransactionList user={user} />
        </>
      ) : (
        <p className="text-center mt-4">Please log in to track your finances.</p>
      )}
      <footer className="text-center p-4">© 2025 Personal Finance Tracker</footer>
    </div>
  );
};

export default App;
