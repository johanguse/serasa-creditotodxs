import { useHistory } from "react-router";
import { Link } from "react-router-dom";
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
        <div className="grid grid-cols-3 gap-2 items-center self-center">
          <h1 className="font-bold text-left text-lg text-pink-500">
          <Link to="/">
            Programa #Código para{" "}
            <span className="text-pink-800">todXs - Mobile</span>
          </Link>
          </h1>
          <div className="text-1xl font-bold text-center">
            <p>Seu score atual é: {user?.user_metadata.score}</p>
          </div>
          <div className="text-1xl text-right">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleSignOut}>
              <span className="ml-1 mr-2">Sign out</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
