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
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-between">
          <div className="">
            <p>Seu score atual é: {user?.user_metadata.score}</p>
          </div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      </div>
    </header>
  );
}
