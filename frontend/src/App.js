import React, { useEffect, useState } from "react";
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
import { loadUser } from "./redux/actions/user";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  useEffect(() => {
    //Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/users/all-users"
          element={
            //<ProtectedRoute>
            <UsersPage />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/users/users-update/:id"
          element={
            //<ProtectedRoute>
            <UserUpdatePage />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/users/users-post"
          element={
            //<ProtectedRoute>
            <UserPostPage />
            //</ProtectedRoute>
          }
        />

        <Route
          path="/workplaces/all-workplaces"
          element={
            //<ProtectedRoute>
            <WorkplacesPage />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/workplaces/workplace-update/:id"
          element={
            //<ProtectedRoute>
            <WorkplaceUpdatePage />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/workplaces/workplace-post"
          element={
            //<ProtectedRoute>
            <WorkplacePostPage />
            //</ProtectedRoute>
          }
        />
      </Routes>
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
