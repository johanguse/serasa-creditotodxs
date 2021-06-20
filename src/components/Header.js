import { useHistory } from "react-router";
import { useAuth } from "../contexts/Auth";

export function Header({ session }) {
  const { user, signOut } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    await signOut();

    history.push("/login");
  }
  return (
    <header className="bg-nav">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="grid grid-cols-3 gap-4">
            <p>Welcome, {user?.id}!</p>
            <p>{user?.user_metadata.score}</p>
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        </div>
      </div>
    </header>
  );
}
