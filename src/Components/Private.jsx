import React from "react";

import { Container, LinearProgress } from "@mui/material";
import {  Navigate, Outlet } from "react-router-dom";
import useAuthStatus from "../features/hook/useAuthStatus";

const Private = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;
