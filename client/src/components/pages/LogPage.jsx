import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../ui/Heading';
import LogRegForm from '../ui/LogRegForm';
export default function LogPage({hookUser}) {
  return (
    <Heading header="Вход">
      <LogRegForm type='log' hookUser={hookUser}></LogRegForm>

    </Heading>
  );
}
