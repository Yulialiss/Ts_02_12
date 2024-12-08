import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from './components/useLocalStorage';

const Main = () => {
  const [token, setToken] = useLocalStorage<string>('token', '');
  const navigate = useNavigate();

  const logout = () => {
    setToken(''); 
    navigate('/login'); 
  };

  return (
    <div>
      {token ? (
        <>
          <p>Ви авторизовані</p>
          <button onClick={logout}>Вийти</button>
        </>
      ) : (
        <Link to="/login">Залогуватися</Link>
      )}
    </div>
  );
};

export default Main;
