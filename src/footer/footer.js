/** @jsxImportSource theme-ui */
import { Box, Container, Text } from "theme-ui";
import { Link } from "components/link";
import Logo from "components/logo";
import data from "./footer.data";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <div sx={styles.footer.logo}>
            <Logo src={"/buslogo.svg"} />
          </div>

          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link path={item.path} key={i} label={item.label} sx={styles.footer.link} />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>Copyright by {new Date().getFullYear()} MD Transportation</Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    bottom: "0",
    left: "0",
    position: "relative",
    width: "100%",
    zIndex: "10",
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [5, null],
      pb: ["40px", null],
      textAlign: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },

    logo: {
      maxWidth: "fit-content",
    },
  },
};
