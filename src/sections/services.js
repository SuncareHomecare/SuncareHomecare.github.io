/** @jsxImportSource theme-ui */

import { Box, Heading, Image } from "theme-ui";
import Carousel from "components/carousel";

const carouselImages = [
  { src: "/close_angle_bus.jpg", alt: "Close angle bus" },
  { src: "/angle_side_bus.jpg", alt: "Angled side bus" },
  { src: "/far_angle_bus.jpg", alt: "Far angle bus" },
  { src: "/far_angle_side_bus.jpg", alt: "Far angle side bus" },
  { src: "/side_bus.jpg", alt: "Side bus" },
];

const services = { 
    row1: [
        {
          icon: "/security-camera.svg",
          header: "Companion Care/Services",
          description: `Non-medical support services designed to provide social 
                        interaction, companionship, and assistance with daily living
                        activities.`
        },
        {
          icon: "/security-camera.svg",
          header: "Homemaker Services",
          description: `Home management services, including meal preparation, cleaning,
                        and other household chores, to assist individuals with daily
                        living activities.`
        },
        {
          icon: "/security-camera.svg",
          header: "Night Supervision",
          description: `Over-night monitoring and supervision services to ensure the
                        safety and well-being of individuals during the night hours.`
        }
    ],
    row2: [
        {
          icon: "/security-camera.svg",
          header: "Independent Living Skills",
          description: `Training and support services to help individuals with
                        disabilities to develop skills and confidence to live independently.`
        },
        {
          icon: "/security-camera.svg",
          header: "24 Hour Emergency Assistance",
          description: `Access to immediate assistance 24 hours a day, 7 days a week
                        in case of an emergency.`
        },
        {
          icon: "/security-camera.svg",
          header: "Individual Community Living Support",
          description: `Support services to help individuals participate in community
                        activities and events, promoting independence and integration
                        into the community.`
        },
    ],
    row3: [
        {
          icon: "/security-camera.svg",
          header: "Respite Care Services",
          description: `Respite care services are temporary in-home care services
                        provided to individuals who need a break from their caregiving
                        responsibilities. These services can be a lifesaver for family
                        caregivers, who may feel overwhelmed or burnt out, and can
                        provide them with the time and space they need to recharge.`
        }
    ],
};


export default function ServicesSection() {
  return (
    <section sx={styles.services}>
        <Box sx={styles.services.headerBox}>
          <Heading as={"h1"} variant="heroPrimary" sx={styles.services.header}>
            <span sx={{ color: "primary" }}>Key Services</span>
          </Heading>
        </Box>
      <div className="container">
          {
              Object.keys(services).map((row) => 
                <div className="row">
                  {
                      services[row].map((item) => 
                        <div className="col mx-auto">
                          <div className="mb-4 pb-1 mx-auto">
                            <div className="d-flex justify-content-center mx-auto" sx={styles.services.iconWrapper}>
                              <div className="me-4 text-primary" sx={styles.services.iconWrapper.icon}>
                                <Image src={item.icon} alt="bus" />
                              </div>
                            </div>
                            <div>
                              <h5>{item.header}</h5>
                              <p className="mb-0 text-muted lh-lg">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      )
                  }
                </div>
              )
          }
      </div>
    </section>
  );
}

          /*<div
            className="position-relative col-12 col-lg-6 order-last order-lg-first mt-5 mt-lg-0"
            sx={styles.services.carousel}
          >
            <Carousel slides={carouselImages} />
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
          </div>*/
const styles = {
  services: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    height: "100%",
    width: "100%",
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
    iconWrapper: {
      width: "100%",
        icon: {
          width: "100px",
        }
    },
    carousel: {
      "@media screen and (max-width: 400px)": {
        height: "300px",
      },
      height: "500px",
    },
  },
};
