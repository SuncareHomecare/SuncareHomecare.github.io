/** @jsxImportSource theme-ui */

import { Box, Container, Heading, Paragraph, Button, Image, Link } from "theme-ui";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as={"h1"} variant="heroPrimary">
            MEET YOUR TRANSPORTATION NEEDS WITH MD!
          </Heading>
          <Paragraph>
            MD Transportation, LLC maintains a rigorous level of safety, responsibility, and dependability. Our
            company&#39;s founder and drivers have years of experience in providing high quality public transportation.
            You can rely on our wealth of knowledge and experience to provide excellent transportation services.
          </Paragraph>
          <p className="mt-8 md:mt-12">
            <Link href="/services#form">
              <Button variant="primary">Request A Bus</Button>
            </Link>
          </p>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={"/far_angle_bus.jpg"} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      //backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      //backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      width: "100%",
      minHeight: "inherit",
      display: "flex",
      flexDirection: "row",
      "@media screen and (max-width: 600px)": {
        flexDirection: "column",
      },
      justifyContent: "center",
    },
    contentBox: {
      "@media screen and (min-width: 600px)": {
        width: "70%",
      },
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      "@media screen and (min-width: 600px)": {
        width: "30%",
        m: "auto",
      },
      m: "auto",
      width: "100",
      justifyContent: "center",
      textAlign: "center",
      // display: "inline-flex",
      // mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        maxHeight: "fit-content",
        borderRadius: "10%",
      },
    },
  },
};
