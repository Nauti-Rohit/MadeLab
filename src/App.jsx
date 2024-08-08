import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AdminDashboard from "./Components/Admin/Dashboard/AdminDashboard";
import UserDashboard from "./Components/User/Dashboard/UserDashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Login />
//       </div>
//     ),
//   },
//   {
//     path: "/register",
//     element: (
//       <div>
//         <Register />
//       </div>
//     ),
//   },
// ]);

function App() {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin">
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="profile" element={<AdminDashboard />} />
          </Route>

          <Route path="user">
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="profile" element={<UserDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
