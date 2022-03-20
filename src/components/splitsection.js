/** @jsxImportSource theme-ui */
import { Container, Box } from "theme-ui";
export default function SplitSection({ id, primarySlot, secondarySlot, reverseOrder }) {
  return (
    <section id={id} sx={styles.splitsection}>
      <Container sx={styles.splitsection.container}>
        <Box sx={styles.splitsection.primary}>{primarySlot}</Box>
        <Box
          sx={styles.splitsection.secondary}
          className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
          
        >
          <Box sx={styles.splitsection.imageBox}>{secondarySlot}</Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  splitsection: {
    py: "20px",
    width: "100%",
    container: {
      mx: "auto",
      px: "5%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "@media screen and (min-width: 600px)": {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      flexDirection: "column",
    },
    primary: {
      "@media screen and (min-width: 600px)": {
        width: "50%",
      },
    },
    secondary: {
      "@media screen and (min-width: 600px)": {
        width: "50%",
      },
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      img: {
        position: "relative",
        maxHeight: "fit-content",
        borderRadius: "10%",
        width: "50%"
      },
    },
  },
};
