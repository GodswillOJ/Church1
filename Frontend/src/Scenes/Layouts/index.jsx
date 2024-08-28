import React, { useState } from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import MyNavBar from '../../Components/MenuBars/NavBar';
import Sidebar from "Components/NavBars/SideBar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (

      <Box flexGrow={1} display="flex" flexDirection="column" height="100vh">
        <MyNavBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box flexGrow={1} overflow="auto" className="custom-scrollbar">
          <Outlet />
        </Box>
      </Box>

  );
};

export default Layout;