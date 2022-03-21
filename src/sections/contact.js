/** @jsxImportSource theme-ui */

import { Box, Heading, Paragraph } from "theme-ui";

export default function Contact() {
  return (
    <section sx={styles.contact} id="contact">
      <Box sx={styles.contact.container}>
        <Box sx={styles.contact.headerBox}>
          <Heading as={"h1"} variant="heroPrimary" sx={styles.contact.header}>
            Contact <span sx={{ color: "primary" }}> Us</span>
          </Heading>
          <Paragraph>
            Thank you for visiting MD Transportation, LLC! We look forward to servicing your transportation needs. Call
            us today!
          </Paragraph>
        </Box>
        <Box sx={styles.contact.info}>
          <Box sx={styles.contact.group}>
            <Heading as={"h1"} variant="title">
              Call Now
            </Heading>
            <div>(612) 203-2702</div>
          </Box>
          <Box sx={styles.contact.group}>
            <Heading as={"h1"} variant="title">
              Address
            </Heading>
            <address itemProp="address">
              <div>12100 7th St. NE</div>
              <div>Blaine, MN 55434</div>
              <div>United States</div>
            </address>
          </Box>
          <Box sx={styles.contact.group}>
            <Heading as={"h1"} variant="title">
              Business Hours
            </Heading>
            <table itemProp="openingHours">
              <tbody>
                <tr>
                  <th sx={{ fontWeight: "600" }}>Mon:</th>
                  <td sx={{ padding: "0 0.5em" }}>5:00 AM - 7:00 PM</td>
                </tr>
                <tr>
                  <th sx={{ fontWeight: "600" }}>Tue:</th>
                  <td sx={{ padding: "0 0.5em" }}>5:00 AM - 7:00 PM</td>
                </tr>
                <tr>
                  <th sx={{ fontWeight: "600" }}>Wed:</th>
                  <td sx={{ padding: "0 0.5em" }}>5:00 AM - 7:00 PM</td>
                </tr>
                <tr>
                  <th sx={{ fontWeight: "600" }}>Thu:</th>
                  <td sx={{ padding: "0 0.5em" }}>5:00 AM - 7:00 PM</td>
                </tr>
                <tr>
                  <th sx={{ fontWeight: "600" }}>Fri:</th>
                  <td sx={{ padding: "0 0.5em" }}>5:00 AM - 7:00 PM</td>
                </tr>
                <tr>
                  <th sx={{ fontWeight: "600" }}>Sat:</th>
                  <td sx={{ padding: "0 0.5em" }}>Closed</td>
                </tr>
                <tr>
                  <th sx={{ fontWeight: "600" }}>Sun:</th>
                  <td sx={{ padding: "0 0.5em" }}>Closed</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  contact: {
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
    info: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      "@media screen and (max-width: 700px)": {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      mx: "auto",
    },
    group: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "190px",
      "@media screen and (max-width: 700px)": {
        alignItems: "flex-start",
        mb: "20px",
      },
    },
  },
};
