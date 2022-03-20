import React, { useState } from "react";
import { Box, Link } from "theme-ui";
import { useRouter } from "next/router";
import Drawer from "components/drawer";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import menuItems from "./header.data";

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  return (
    <Drawer
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
      closeButton={<IoMdClose size="24" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map((menuItem, i) => (
              <Link className={router.pathname == menuItem.path ? "active" : ""} href={menuItem.path} key={i}>
                {menuItem.label}
              </Link>
            ))}
          </Box>
        </Box>
    </Drawer>
  );
}

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  drawer: {
    width: "35%",
    height: "100vh",
    top: "0",
    position: "fixed",
    background: "white",
    // zIndex: "999",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "15px",
    zIndex: "1000",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    background: "white",
    opacity: "1",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "black",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      "@media screen and (max-width: 425px)": {
        borderBottom: "none",
      },
      transition: "all 0.25s",
      textDecoration: "none",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};
