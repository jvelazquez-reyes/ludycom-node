import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import locals
import Login from "../components/Login/Login";

// Module not working at the moment
const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, loading]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
