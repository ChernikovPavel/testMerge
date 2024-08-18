import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../ui/Heading';
export default function MainPage() {
  return (
    <Heading header="Главная">
      <div className='d-flex'>
      <Link to="/log" className="btn btn-primary">
        Вход
      </Link>
      <div className="w-10px"></div>
      <Link to="/reg" className="btn btn-primary">
        Регистрация
      </Link>
      </div>
    </Heading>
  );
}
