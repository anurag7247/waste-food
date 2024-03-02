
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function AdminLogin() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userName === 'admin' && password === '123') {
      navigate('/-admin');
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-2xl font-bold mb-4">Login Form</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-600">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
