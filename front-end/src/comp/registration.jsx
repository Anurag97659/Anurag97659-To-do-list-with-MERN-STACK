import React, { useState } from 'react';
import { Link } from "react-router-dom";

function REGISTRATION() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [fullname, setfullname] = useState('');
  const [username, setusername] = useState('');
  // console.log(email);
  const submit = (e) => {
    e.preventDefault();
    console.log(email, password, fullname, username);
    try {
      fetch('http://localhost:8000/anuragnidhi-tdl/2005/v1/users/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, fullname, email}),
      })
          .then((res) => res.json())
          .then((data) => {
              if (data.error) {
                  alert(data.error);
              } else {
                  alert('registred successful');
                  window.location.href = '/login';
              }
          })
          .catch((error) => {
              alert("user or email already exists file registration.jsx error");
          });
  
  } catch (error) {
      alert(error);
      
  }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          REGISTRATION
        </h2>
        <form onSubmit={submit} id="form" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="fullname"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="button-group mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default REGISTRATION;
