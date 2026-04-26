import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      return setError("Please fill all fields");
    }

    try {
      const res = await axios.post("https://netflix-clone-6g5c.onrender.com", {
        email,
        password,
      });

      if (res.data.success) {
        setError("");
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center relative">
      
      {/* Login Box */}
      <div className="relative bg-black bg-opacity-75 p-10 rounded w-96 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-red-600 p-3 rounded font-semibold hover:bg-red-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-400 mt-4 text-sm">
          New to Netflix? <span className="text-white cursor-pointer">Sign up now</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
