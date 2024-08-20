import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function LogRegForm({ type, hookUser }) {
  // const [hookedInput, hookInput] = useState({ login: '', password: '' });
  // const inputHandler = (event) => {
  //   return hookInput((before) => ({
  //     ...before,
  //     [event.target.id]: event.target.value,
  //   }));
  // };
  const inputRef = useRef({login: '', password: ''})

console.log(inputRef)
  return (
    <div>
      <label htmlFor="login" className="form-label mb-1">
        Логин
      </label>
      <input
        type="text"
        className="form-control mb-1 "
        id="login"
        aria-describedby="emailHelp"
        autoComplete="off"
        ref={inputRef.login}
      />

      <label htmlFor="password" className="form-label mb-1">
        Пароль
      </label>
      <input
        type="text"
        className="form-control mb-3 "
        id="password"
        aria-describedby="emailHelp"
        autoComplete="off"
        ref={inputRef.password}
      />
      {type === 'log' ? (
        <button className="btn btn-dark me-3" onClick={() => {}}>Войти</button>
      ) : (
        <button className="btn btn-dark me-3">Зарегистрироваться</button>
      )}
      <Link to="/" className="btn btn-dark">
        Обратно на главную
      </Link>
    </div>
  );
}
