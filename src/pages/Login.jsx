import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const Login = () => {
  const { userLogin, isLoggedIn, language } = useContext(MovieContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const translations = {
    uz: {
      title: 'Kirish',
      email: 'Email',
      password: 'Parol',
      loginBtn: 'Kirish',
      noAccount: 'Akkauntingiz yo\'qmi?',
      register: 'Ro\'yxatdan o\'tish',
      enterEmail: 'Emailingizni kiriting',
      enterPassword: 'Parolingizni kiriting',
    },
    en: {
      title: 'Login',
      email: 'Email',
      password: 'Password',
      loginBtn: 'Login',
      noAccount: 'Don\'t have an account?',
      register: 'Register',
      enterEmail: 'Enter your email',
      enterPassword: 'Enter your password',
    },
    ru: {
      title: 'Вход',
      email: 'Электронная почта',
      password: 'Пароль',
      loginBtn: 'Войти',
      noAccount: 'Нет аккаунта?',
      register: 'Зарегистрироваться',
      enterEmail: 'Введите email',
      enterPassword: 'Введите пароль',
    }
  };

  const t = translations[language];

  if (isLoggedIn) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const result = userLogin(email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">{t.title}</h1>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">
              {t.email}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-emerald-500"
              placeholder={t.enterEmail}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">
              {t.password}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-emerald-500"
              placeholder={t.enterPassword}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition"
          >
            {t.loginBtn}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6 text-sm">
          {t.noAccount}{' '}
          <Link to="/register" className="text-emerald-500 hover:text-emerald-400 underline">
            {t.register}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
