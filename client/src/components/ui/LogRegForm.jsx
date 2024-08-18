import React from 'react';
import { Link } from 'react-router-dom';

export default function LogRegForm({ type }) {
  return (
    <div>
      <label htmlFor="inputLogin" className="form-label mb-1">
        Логин
      </label>
      <input
        type="text"
        className="form-control mb-1"
        id="inputLogin"
        aria-describedby="emailHelp"
        autoComplete="off"
      />

      <label htmlFor="inputLogin" className="form-label mb-1">
        Пароль
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="inputPassword"
        aria-describedby="emailHelp"
        autoComplete="off"
      />
      <Link to="/" className="btn btn-dark">
        Обратно на главную
      </Link>
    </div>
  );
}
