import { loginUser } from "../../redux/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Reusable/Button";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validate(email, password) {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!password.trim()) newErrors.password = "Password is required.";
    return newErrors;
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const clientErrors = validate(email, password);
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors);
      return;
    }

    setErrors({});

    try {
      await dispatch(loginUser({ email, password })).unwrap(); // ← this line fixed
      localStorage.setItem("isLoggedIn", "true");
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Login failed:", err);
      setErrors({ general: "Something went wrong. Try again." });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* YouTube-style header */}
      <header className="w-full bg-white shadow-sm py-3 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Logo"
            className="h-8"
          />
          <span className="font-bold text-sm text-gray-800">PK</span>
        </div>

        <Button to="/signup" label={"Signup"} />
      </header>

      <div className="flex justify-center items-center flex-1 w-full">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mt-10">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Log In
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                autoComplete="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="you@example.com"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                placeholder="********"
                className={`w-full border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none`}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>

            {errors.general && (
              <p className="text-red-600 text-sm text-center">
                {errors.general}
              </p>
            )}

            <p className="text-sm text-center text-gray-600 mt-4">
              <Link to="/signup" className="text-blue-600 hover:underline">
                Don't have an account?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
