import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
const Admlog = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();
       const [loading, setLoading] = useState(false);

         const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setLoading(true);

    
    setTimeout(() => {
      console.log("Login successful! (mock)");
      setLoading(false);
     alert(`Welcome ${data.username}!`);
    }, 1000);
  };

  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl mb-4 text-center font-semibold">Admin Login</h2>

        {/* Username Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
           {...register("username")}
            type="text"
          
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
          />
          
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0078B1] text-white py-2 rounded hover:bg-[#006699] disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
    </div>
  )
}

export default Admlog
