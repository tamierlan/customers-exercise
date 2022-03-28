import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/Home.css';

const Home = () => {

    return (
        <div className='wrapper'>

          <header>
            <ul>
              <li>
                <Link to='register'>
                  <button>Register</button>
                </Link>
              </li>

              <li>
                <Link to='login'>
                  <button>Login</button>
                </Link>
              </li>

            </ul>
          </header>

          <main className='home-main'>
            <h1>Welcome to Customer website!!!</h1>
          </main>

        </div>
    )
}

export default Home;

