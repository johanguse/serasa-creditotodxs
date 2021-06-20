import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { useAuth } from "../contexts/Auth";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);

  const { signIn } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { error } = await signIn({ email, password });

    if (error) return setError(error);

    history.push("/");
  }

  return (
    <div className="form-screen-warp">
      <h1 className="font-bold text-center mb-10 text-4xl text-pink-500">
        Programa #Código para{" "}
        <span className="text-pink-800">todXs - Mobile</span>
      </h1>
      <div className="form-warp">
        <h1 className="form-warp-title">Login into your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-warp-error">
            {error && JSON.stringify(error)}
          </div>

          <div className="mb-4">
            <label htmlFor="input-email" className="form-warp-label">
              Email
            </label>
            <input
              id="input-email"
              type="email"
              ref={emailRef}
              className="form-warp-input"
              placeholder="Johnbull@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="input-password" className="form-warp-label">
              Password
            </label>
            <input
              id="input-password"
              type="password"
              ref={passwordRef}
              className="form-warp-input"
              placeholder="Enter your password"
            />
          </div>

          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
        <br />
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
