import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { login, useAuth } from '../firebase';

import '../style/Login.css';

const Login = () => {

  const emailRef = useRef();
  const passRef = useRef();

  const currentCustomer = useAuth();

  const handleLoging = async () => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    if (!email || !pass) return alert('Please enter the fields')

    try {
      await login(email, pass);
    } catch (err) {
      alert(err.code);
    }
  }



  return (
    <div className='wrapper'>

      <header>
        <ul>
          <li>
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </li>

        </ul>
      </header>

      <main className='auth-form'>
        <div>
        <div>
          <h1>Login In</h1>
        </div>

          <div>Loged as: { currentCustomer?.email }</div>

          <input ref={ emailRef } type='text' placeholder='Enter Email' />

          <input ref={ passRef } type='text' placeholder='Enter Password' />

          <button onClick={ handleLoging }>
            log In
          </button>
          
        </div>
      </main>

  </div>
  )
}

export default Login;