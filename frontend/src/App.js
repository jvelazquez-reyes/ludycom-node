import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import locals
import {
  LoginPage,
  UsersPage,
  UserPostPage,
  UserUpdatePage,
  WorkplacesPage,
  WorkplacePostPage,
  WorkplaceUpdatePage,
} from "./routes/Routes.js";
import Store from "./redux/store";
import ProtectedRoute from "./routes/ProtectedRoute";
import { loadUser } from "./redux/actions/user";

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Get all users */}
        <Route
          path="/users/all-users"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        />
        {/* Update user */}
        <Route
          path="/users/users-update/:id"
          element={
            <ProtectedRoute>
              <UserUpdatePage />
            </ProtectedRoute>
          }
        />
        {/* Create user */}
        <Route
          path="/users/users-post"
          element={
            <ProtectedRoute>
              <UserPostPage />
            </ProtectedRoute>
          }
        />

          {/* Get all workplaces */}
        <Route
          path="/workplaces/all-workplaces"
          element={
            <ProtectedRoute>
              <WorkplacesPage />
            </ProtectedRoute>
          }
        />
        {/* Update workplace */}
        <Route
          path="/workplaces/workplace-update/:id"
          element={
            <ProtectedRoute>
              <WorkplaceUpdatePage />
            </ProtectedRoute>
          }
        />
        {/* Delete workplace */}
        <Route
          path="/workplaces/workplace-post"
          element={
            <ProtectedRoute>
              <WorkplacePostPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* Toastify response messages */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
