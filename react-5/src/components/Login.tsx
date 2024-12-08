import React, { useState } from 'react';
import axios from 'axios';
import LabelWithInput from './LabelWithInput';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://example.com/login', { username, password });
      console.log('User logged in:', response.data);
    } catch (err) {
      setError('Не вдалося увійти. Перевірте правильність даних.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LabelWithInput
        type="text"
        labelText="Ім'я користувача"
        name="username"
        value={username}
        onChange={(value) => setUsername(value)}
      />
      <LabelWithInput
        type="password"
        labelText="Пароль"
        name="password"
        value={password}
        onChange={(value) => setPassword(value)}
      />
      <button type="submit">Залогуватися</button>
    </form>
  );
};

export default LoginForm;
