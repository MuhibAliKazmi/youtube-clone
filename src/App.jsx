import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Home from "./components/YouTubeLayout/home/Home";
import Watch from "./components/YouTubeLayout/watch/Watch";
import ProtectedRoute from "./components/pages/routes/ProtectedRoute";
import PublicRoute from "./components/pages/routes/PublicRoute";
import "react-loading-skeleton/dist/skeleton.css";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="watch/:id" element={<Watch />} />
        </Route>
      </Routes>
    </Router>
  );
}
