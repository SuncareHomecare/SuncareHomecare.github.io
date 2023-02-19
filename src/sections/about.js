/** @jsxImportSource theme-ui */

import { Box, Heading, Paragraph } from "theme-ui";

export default function AboutSection() {
  return (
    <section sx={styles.about} id="about">
      <Box sx={styles.about.container}>
        <Box sx={styles.about.headerBox}>
          <Heading as={"h1"} variant="heroPrimary" sx={styles.about.header}>
            <span sx={{ color: "primary" }}> Suncare Homecare</span>
          </Heading>
          <Paragraph>Providing you with exceptional, reliable, and compassionate care.</Paragraph>
        </Box>
        <Box sx={styles.about.segmentBoxDark}>
          <Heading as={"h3"} variant="title" sx={styles.about.segmentHeader}>
            Our Mission
          </Heading>
          <Paragraph sx={styles.about.segmentBody}>
            Suncare Homecare is a licensed provider of home and community-based services.
            Our mission is to empower individuals to maintain their independence
            and enhance their quality of life through compassionate and reliable
            care in the comfort of their own homes.
         </Paragraph>
        </Box>
        <Box sx={styles.about.segmentBoxLight}>
          <Heading as={"h3"} variant="title" sx={styles.about.segmentHeader}>
            Our Values
          </Heading>
          <Paragraph sx={styles.about.segmentBody}>
            We believe that everyone deserves to live a life of dignity and respect,
            regardless of their physical or mental abilities. That's why we're 
            dedicated to providing exceptional care to our clients, helping them
            to achieve their goals and live life to the fullest.
          </Paragraph>
        </Box>
        <Box sx={styles.about.segmentBoxDark}>
          <Heading as={"h3"} variant="title" sx={styles.about.segmentHeader}>
            Our Team
          </Heading>
          <Paragraph sx={styles.about.segmentBody}>
            Our experienced and highly trained care provider is committed 
            to providing the highest quality of care, tailored to meet the unique
            needs of each individual. Whether it's assistance with daily living
            activities, companionship, or medical care, we're here to support our
            clients and their families every step of the way.
          </Paragraph>
        </Box>
        <Box sx={styles.about.segmentBoxLight}>
          <Heading as={"h3"} variant="title" sx={styles.about.segmentHeader}>
            Our Passion
          </Heading>
          <Paragraph sx={styles.about.segmentBody}>
            At Suncare Homecare, we're passionate about making a difference in 
            the lives of those we serve. If you're looking for a home care provider
            that truly cares, look no further than Suncare Homecare.
          </Paragraph>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  about: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: "20px",
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 2,
    container: {
      width: "100%",
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    headerBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    header: {
      "&::after": {
        display: "block",
        content: '""',
        width: "50%",
        margin: "0 auto",
        borderBottom: "2px solid",
        borderBottomColor: "primary",
      },
    },
    segmentBoxLight: {
      backgroundColor: "white",
      maxWidth: "700px",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px 70px",
      borderRadius: "10px",
    },
    segmentBoxDark: {
      backgroundColor: "#f9f9f9",
      maxWidth: "700px",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px 70px",
      borderRadius: "10px",
    },

    segmentHeader: { mb: "20px" },
    segmentBody: { textAlign: "left" },
  },
};
