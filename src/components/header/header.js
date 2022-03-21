/** @jsxImportSource theme-ui */

import { Box, Button, Container, Flex, Link, NavLink } from "theme-ui";
import { useRouter } from "next/router";
import menuItems from "./header.data";
import Logo from "components/logo";
import MobileDrawer from "./mobile-drawer";

/// TODO: Needs Logo image in assets folder
export default function Header({ className }) {
  const router = useRouter();
  return (
    <header id="header" className="sticky top-0 bg-white shadow" sx={styles.header}>
      <Container sx={styles.container}>
        <Logo src={"/buslogo.svg"} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <NavLink
              href={menuItem.path}
              offset={-70}
              key={i}
              className={router.pathname == menuItem.path ? "active" : ""}
            >
              {menuItem.label}
            </NavLink>
          ))}
        </Flex>
        <Box sx={styles.container}>
          <Link href="/services#form">
            <Button className="donate_btn" variant="secondary" aria-label="Get a Quote">
              Get a Quote
            </Button>
          </Link>
          <MobileDrawer />
        </Box>
      </Container>
    </header>
  );
}

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    "z-index": 999,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
