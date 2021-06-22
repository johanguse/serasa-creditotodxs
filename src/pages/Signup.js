import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { updateUserScore } from "../utils/updateUserScore";

import { useAuth } from "../contexts/Auth";

export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);

  const { signUp } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { error, user } = await signUp({ email, password });

    if (error) {
      setError(error);
    } else {
      if (user && !error) {
        await updateUserScore(user);
      } else {
        console.log("ok");
      }
    }

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
        <h1 className="form-warp-title">Criar nova conta</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-warp-error">
            {error && JSON.stringify(error)}
          </div>

          <div className="mb-4">
            <label htmlFor="input-email" className="form-warp-label">
              E-mail
            </label>
            <input
              id="input-email"
              type="email"
              ref={emailRef}
              className="form-warp-input"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="input-password" className="form-warp-label">
              Senha
            </label>
            <input
              id="input-password"
              type="password"
              ref={passwordRef}
              className="form-warp-input"
            />
          </div>

          <br />
          <button type="submit" className="button-submit">
            Criar conta
          </button>
        </form>
        <br />
        <p>
          <Link to="/login">Já tem conta? Faça o login</Link>
        </p>
      </div>
    </div>
  );
}
