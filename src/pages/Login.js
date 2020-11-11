import React, { useState } from "react";
import Error from "../components/Error";
import "../styles/login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const [login, setLogin] = useState(false);

  const mostrarContrasena = (e) => {
    e.preventDefault();
    let tipo = document.getElementById("password");
    let img = document.getElementById("showImage");
    if (tipo.type === "password") {
      tipo.type = "text";
      img.src = "https://www.flaticon.es/svg/static/icons/svg/25/25674.svg";
    } else {
      tipo.type = "password";
      img.src = "https://image.flaticon.com/icons/png/512/25/25186.png";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let url = "http://3.15.92.223:5050/api/Login";
    let params = { userName: user, password };
    if (user === "" && password === "") {
      setError(false);
      setLogin(false);
    } else {
      let urlFetch =
        url + "?userName=" + params.userName + "&password=" + params.password;
      fetch(urlFetch)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setError(response);
          setLogin(response);
        });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin} id="form-login" hidden={login}>
        <div className="login">
          <div className="image">
            <img
              src="https://raw.githubusercontent.com/pic-k-myvibe/header/master/img/icon-user.png"
              alt="user"
              className="avatar"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="username">
              <strong>Usuario:</strong>
            </label>
            <input
              type="text"
              name="username"
              className="input-user"
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <label htmlFor="password">
              <strong>Contraseña:</strong>
            </label>
            <div className="flex-container">
              <input
                type="password"
                name="password"
                id="password"
                className="input-passw"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={mostrarContrasena} className="showPass">
                <img
                  src="https://image.flaticon.com/icons/png/512/25/25186.png"
                  height="20"
                  width="20"
                  alt="showPass"
                  title="mostrar contraseña"
                  id="showImage"
                />
              </button>
            </div>
          </div>
          <button type="submit" className="submit">
            <strong>Ingresar</strong>
          </button>
        </div>
        {!error && (
          <Error message="usuario o contraseña inválidos, por favor intente de nuevo" />
        )}
      </form>
      <h1 hidden={!login} className="login-message">
        Gracias por hacer login
      </h1>
    </div>
  );
}
