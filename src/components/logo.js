/** @jsxImportSource theme-ui */

import { Image, Link } from "theme-ui";
// import { Link } from "./link";

export default function Logo({ src, ...rest }) {
  return (
    <Link href="/" sx={styles.logo} {...rest}>
      <Image src={src} alt="logo" />
      <strong>MD Transportation LLC</strong>
    </Link>
  );
}

const styles = {
  logo: {
    variant: "links.logo",
    display: "flex",
    cursor: "pointer",
    textDecoration: "none",
    color: "primary",
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "secondary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
