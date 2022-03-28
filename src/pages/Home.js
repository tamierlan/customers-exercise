
import Header from '../components/Header';


const Home = () => {
  const data = [
    { to:  '/register', text: 'Register' },
    { to:  '/login', text: 'Login' },
  ];

  return (
    <div className='wrapper'>



      <Header data={ data } />  

      <div>
        <h1>Welcome to home page of Customer App!</h1>
      </div>


      

    </div>
  )
}

export default Home;

