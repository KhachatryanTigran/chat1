import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { RequireAuth } from "./context/RequireAuth";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

function App() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser, "currentUser");

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
