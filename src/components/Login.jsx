import React, { useState } from 'react'

const Login = () => {
const [user,setuser]=useState({email:'',password:''})

const handleChange=(e)=>{
	setuser({...user,[e.target.name]:e.target.value})
}


const loginForm=async(e)=>{
	e.preventDefaut();
	const response=await fetch('http://localhost:8000/login',{
		method:"POST",
		header:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(user)
	})
	const data = await response.json();
    if (data.success) {
      setIsLogin(true);
      localStorage.setItem("token", data.token);
      localStorage.setItem("login", isLogin);
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
      setuser({ email: "", password: "" });
      navigate("/");
    } else {
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
    }
}


  return (
    <div className='flex justify-center '>
        <div className="flex flex-col max-w-md p-4 border mt-3 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center ">
		<h1 className="my-3 text-4xl font-bold">Login</h1>
		<p className="text-sm dark:text-gray-600">Login to access your account</p>
	</div>
	<form noValidate="" action="" onClick={loginForm} className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" onChange={handleChange} id="email" placeholder="abc@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 outline-none" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" onChange={handleChange} id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 outline-none dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold text-white rounded-md bg-red-500 ">Login</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?{" "}
				<a rel="noopener noreferrer" href="signup" className="text-red-500 hover:underline">Sign up</a>.
			</p>
		</div>
	</form>
</div>
    </div>
  )
}

export default Login