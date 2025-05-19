import React from 'react'

const Signup = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-0">
      <div className="w-full max-w-md flex flex-col border mt-6 rounded-md p-6 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Sign up</h1>
          <p className="text-sm text-gray-600">Create a new account</p>
        </div>

        <form noValidate className="space-y-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
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
