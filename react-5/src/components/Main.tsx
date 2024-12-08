import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useLocalStorage from './useLocalStorage';

interface Dog {
  id: string;
  name: string;
}

const Main = () => {
  const [token, setToken] = useLocalStorage<string>('token', ''); 
  const [dogs, setDogs] = useState<Dog[]>([]); 
  const [error, setError] = useState<string>(''); 
  const navigate = useNavigate(); 

  const logout = () => {
    setToken(''); 
    navigate('/login'); 
  };

  const fetchDogs = async () => {
    try {
      const response = await axios.get('https://dogs.kobernyk.com/api/v1/dogs', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDogs(response.data);
    } catch (err) {
      setError('Не вдалося завантажити список собак.');
    }
  };

  useEffect(() => {
    if (token) {
      fetchDogs();
    }
  }, [token]);

  return (
    <div>
      {token ? (
        <>
          <button onClick={logout}>Вийти</button>
          {error && <p>{error}</p>}
          <ul>
            {dogs.map((dog) => (
              <li key={dog.id}>{dog.name}</li> 
            ))}
          </ul>
        </>
      ) : (
        <Link to="/login">Залогуватися</Link>
      )}
    </div>
  );
};

export default Main;
