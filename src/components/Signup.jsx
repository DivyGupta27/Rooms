import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");


  const navigate=useNavigate()
const signupFun = async (e) => {
    e.preventDefault();
    console.log(number, email, password);
    const userData = {
      name:name,
      number: number,
      email: email,
      password: password,
    };
    const response = await fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data)
    if(data.success){
        toast.success(data.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            setName("");
            setEmail("");
            setNumber("");
            setPassword("");
            navigate('/login')
    }
    else{
        toast.error(data.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          }}
  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-0">
      <div className="w-full max-w-md flex flex-col border mt-6 rounded-md p-6 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Sign up</h1>
          <p className="text-sm text-gray-600">Create a new account</p>
        </div>

        <form noValidate className="space-y-8" onSubmit={signupFun}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name"  className="block mb-1 text-sm">Full name</label>
              <input
                type="string"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                setName(e.target.value);
              }}
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email"  className="block mb-1 text-sm">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                setEmail(e.target.value);
              }}
                placeholder="abc@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="number" className="block mb-1 text-sm">Phone no.</label>
              <input
                type="number"
                name="number"
                id="number"
                value={number}
                onChange={(e) => {
                setNumber(e.target.value);
              }}
                placeholder="1234567890"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                value={password}
                onChange={(e) => {
                setPassword(e.target.value);
              }}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white rounded-md bg-red-500 hover:bg-red-600 transition-colors"
            >
              Sign up
            </button>

            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-red-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
