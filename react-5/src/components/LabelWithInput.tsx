import React, { useState } from 'react';
import LabelWithInput from './components/LabelWithInput';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Авторизація з', { username, password });
  };

  return (
    <form onSubmit={handleLogin}>
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
