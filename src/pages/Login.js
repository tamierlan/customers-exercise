import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import { login, useAuth } from '../firebase';
import Header from '../components/Header';


const Login = () => {

  // const emailRef = useRef();
  // const passRef = useRef();
  // const currentCustomer = useAuth();
  // const handleLoging = async () => {
  //   const email = emailRef.current.value;
  //   const pass = passRef.current.value;

  //   if (!email || !pass) return alert('Please enter the fields')
  //   try {
  //     await login(email, pass);
  //   } catch (err) {
  //     alert(err.code);
  //   }
  // }

  const data = [{ to:  '/register', text: 'Register' }];



  return (
    <div className='wrapper'>

      {/* <Header data={ data } /> 


      <form>
        Loged as: { currentCustomer?.email }
        <h1>Register</h1>

        <input ref={ emailRef } type='text' placeholder='Enter Email' />
        <input ref={ passRef } type='text' placeholder='Enter Password' />


        <button onClick={ handleLoging }>
            log In
        </button>

      </form> */}

  </div>
  )
}

export default Login;