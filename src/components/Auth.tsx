import { useAuthState } from "react-firebase-hooks/auth";
import { auth, loginWithGoogle, logout } from "../firebase";  // ✅ Ensure this matches firebase.ts

const Auth = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col items-center p-4">
      {user ? (
        <>
          <p className="mb-2">Welcome, {user.displayName}</p>
          <button onClick={logout} className="bg-red-500 p-2 text-white rounded">
            Logout
          </button>
        </>
      ) : (
        <button onClick={loginWithGoogle} className="bg-blue-500 p-2 text-white rounded">
          Login with Google
        </button>
      )}
    </div>
  );
};

export default Auth;
