import {Link} from 'react-router-dom'
import Heading from '../ui/Heading';
import LogRegForm from '../ui/LogRegForm'
export default function RegPage() {
  return (
    <Heading header='Регистрация'>
        <LogRegForm></LogRegForm>
    </Heading>
  );
}
