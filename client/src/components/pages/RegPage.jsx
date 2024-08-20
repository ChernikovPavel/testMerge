import {Link} from 'react-router-dom'
import Heading from '../ui/Heading';
import LogRegForm from '../ui/LogRegForm'
export default function RegPage({hookUser}) {
  return (
    <Heading header='Регистрация'>
        <LogRegForm type='reg' hookUser={hookUser}></LogRegForm>
    </Heading>
  );
}
