import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isLoginMode && formData.password !== formData.confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      const endpoint = isLoginMode ? '/auth/login' : '/auth/register';
      const payload = isLoginMode
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const response = await axios.post(`https://nodejs-django.onrender.com/api${endpoint}`, payload);

      if (isLoginMode) {
        localStorage.setItem('user', JSON.stringify(response.data));
        alert('Login successful!');
        navigate('/task');
      } else {
        alert('Signup successful! Please log in.');
        setIsLoginMode(true);
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (

    
    <div className="min-h-screen flex items-center justify-center bg-blue-200 px-4 ">
          
             
      <div className="bg-blue-300 text-black   max-sm:mb-20 max-lg:mb-30 shadow-md  px-18 py-6 w-full max-w-md rounded-4xl h-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLoginMode ? 'Login to Gigfloww' : 'Create your Gigfloww account'}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          {!isLoginMode && (
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered rounded-2xl"
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered rounded-2xl"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input input-bordered rounded-2xl"
          />

          {!isLoginMode && (
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="input input-bordered rounded-2xl"
            />
          )}

          <button type="submit" className="btn btn-primary mt-4">
            {isLoginMode ? 'Login' : 'Signup'}
          </button>
        </form>

        <p className="mt-4 text-center">
          {isLoginMode ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={toggleMode} className="text-blue-600 underline">
            {isLoginMode ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
