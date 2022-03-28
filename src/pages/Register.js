import { useRef, useState } from 'react';
import Header from '../components/Header';

import { register, useAuth, logout } from '../firebase';

const Register = () => {
  const [ loading, setLoading ] = useState(true);
  const currentCustomer = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();


  const handleRegister = async () => {
    setLoading(true);

    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    const confPass = confirmPasswordRef.current.value;

    if (!email || !pass || !confPass) return alert('please fill out all the inputs');
    if (pass !== confPass) return alert('password is not matched');


    try {
      await register(email, pass);
    } catch (err) {
      alert(err.code);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      alert(err.code)
    }
  };

  const data = [{ to:  '/login', text: 'Login' }];




  return (
    <div className='wrapper'>
      <Header data={ data } />



      <form>
        Loged as: { currentCustomer?.email }
        <h1>Register</h1>

        <input ref={ emailRef } type='text' placeholder='Enter Email' />
        <input ref={ passwordRef } type='text' placeholder='Enter Password' />
        <input ref={ confirmPasswordRef } type='text' placeholder='Confirm Password' />

        {!currentCustomer && (
          <button onClick={ handleRegister }>
            Register
          </button>
        )}

        {currentCustomer && (
          <button onClick={ handleLogout }>
            logout
          </button>
        )}

      </form>


    </div>
  )
}

export default Register;