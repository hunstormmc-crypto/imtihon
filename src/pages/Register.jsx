import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const Register = () => {
  const { userRegister, isLoggedIn, language } = useContext(MovieContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const translations = {
    uz: {
      title: 'Ro\'yxatdan o\'tish',
      name: 'Ism',
      email: 'Email',
      password: 'Parol',
      confirmPassword: 'Parolni tasdiqlang',
      registerBtn: 'Ro\'yxatdan o\'tish',
      hasAccount: 'Akkauntingiz bormi?',
      login: 'Kirish',
      enterName: 'Ismingizni kiriting',
      enterEmail: 'Emailingizni kiriting',
      enterPassword: 'Parolingizni kiriting',
      confirmPasswordPlaceholder: 'Parolni qayta kiriting',
      passwordMismatch: 'Parollar mos kelmaydi',
    },
    en: {
      title: 'Register',
      name: 'Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      registerBtn: 'Register',
      hasAccount: 'Already have an account?',
      login: 'Login',
      enterName: 'Enter your name',
      enterEmail: 'Enter your email',
      enterPassword: 'Enter your password',
      confirmPasswordPlaceholder: 'Re-enter your password',
      passwordMismatch: 'Passwords do not match',
    },
    ru: {
      title: 'Регистрация',
      name: 'Имя',
      email: 'Электронная почта',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      registerBtn: 'Зарегистрироваться',
      hasAccount: 'Уже есть аккаунт?',
      login: 'Войти',
      enterName: 'Введите имя',
      enterEmail: 'Введите email',
      enterPassword: 'Введите пароль',
      confirmPasswordPlaceholder: 'Повторите пароль',
      passwordMismatch: 'Пароли не совпадают',
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

    if (password !== confirmPassword) {
      setError(t.passwordMismatch);
      return;
    }

    const result = userRegister(name, email, password);
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
              {t.name}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-emerald-500"
              placeholder={t.enterName}
              required
            />
          </div>

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

          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2">
              {t.confirmPassword}
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-emerald-500"
              placeholder={t.confirmPasswordPlaceholder}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition"
          >
            {t.registerBtn}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6 text-sm">
          {t.hasAccount}{' '}
          <Link to="/login" className="text-emerald-500 hover:text-emerald-400 underline">
            {t.login}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
