import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // ensure react-toastify is installed

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://booking-y3rp.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('token', data.token);

        toast.success(data.message, {
          position: 'top-center',
          autoClose: 4000,
          theme: 'colored',
        });
        if(data.isAdmin){
          navigate('/adminpanel')
        }
        else{

          setUser({ email: '', password: '' });
          navigate('/');
        }
      } else {
        toast.error(data.message, {
          position: 'top-center',
          autoClose: 4000,
          theme: 'colored',
        });
      }
    } catch (error) {
      toast.error('Something went wrong!', {
        position: 'top-center',
        autoClose: 4000,
        theme: 'colored',
      });
    }
  };

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col max-w-md p-4 border mt-3 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Login</h1>
          <p className="text-sm dark:text-gray-600">Login to access your account</p>
        </div>
        <form onSubmit={loginForm} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email}
                placeholder="abc@gmail.com"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">Password</label>
                <a href="#" className="text-xs hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold text-white rounded-md bg-red-500">Login</button>
            </div>
            <p className="px-6 text-sm text-center">
              Don't have an account yet?{' '}
              <a href="/signup" className="text-red-500 hover:underline">Sign up</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
