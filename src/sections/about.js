/** @jsxImportSource theme-ui */

import { Box, Heading, Paragraph } from "theme-ui";

export default function AboutSection() {
  return (
    <section sx={styles.about} id="about">
      <Box sx={styles.about.container}>
        <Box sx={styles.about.headerBox}>
          <Heading as={"h1"} variant="heroPrimary" sx={styles.about.header}>
            We Are <span sx={{ color: "primary" }}> MD</span>
          </Heading>
          <Paragraph>Providing you with safe, reliable, and punctional transportation.</Paragraph>
        </Box>
        <Box sx={styles.about.segmentBoxDark}>
          <Heading as={"h3"} variant="title" sx={styles.about.segmentHeader}>
            The Owner
          </Heading>
          <Paragraph sx={styles.about.segmentBody}>
            Prior to MD Transportation, LLC, our owner, Mr. Mumed drove school buses for Minneapolis Public Schools for
            15 years before founding his own transportation company. His extensive experience behind the wheel gives him
            a valued perspective in ensuring that drivers are punctual and professional.
          </Paragraph>
        </Box>
        <Box sx={styles.about.segmentBoxLight}>
          <Heading as={"h3"} variant="title" sx={styles.about.segmentHeader}>
            The Director of Operations
          </Heading>
          <Paragraph sx={styles.about.segmentBody}>
            MD’s director of operations, Waday Musse, started driving a school bus for First Student in 2007 and still
            drives for MD. His focus is safety, having never had an accident.
          </Paragraph>
        </Box>
        <Box sx={styles.about.segmentBoxDark}>
          <Heading as={"h3"} variant="title" sx={styles.about.segmentHeader}>
            Safety and Reliability
          </Heading>
          <Paragraph sx={styles.about.segmentBody}>
            We know that drivers are the face of the school and that a successful day at school starts with a
            problem-free bus ride. A well-trained and experienced driver can reliably produce safe rides while
            addressing behavioral issues and driving conditions. We train our drivers to always provide safe and
            efficient transportation services. Parents and teachers alike can expect timely pick-ups and dropoffs, day
            in and day out.
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
      width: "90%",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px 70px",
      borderRadius: "10px",
    },
    segmentBoxDark: {
      backgroundColor: "#f9f9f9",
      width: "90%",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px 70px",
      borderRadius: "10px",
    },

    segmentHeader: { mb: "20px" },
    segmentBody: { textAlign: "center" },
  },
};
