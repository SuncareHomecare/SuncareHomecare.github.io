/** @jsxImportSource theme-ui */

import { Image } from "theme-ui";
import Carousel from "components/carousel";

const carouselImages = [
  { src: "/close_angle_bus.jpg", alt: "Close angle bus" },
  { src: "/angle_side_bus.jpg", alt: "Angled side bus" },
  { src: "/far_angle_bus.jpg", alt: "Far angle bus" },
  { src: "/far_angle_side_bus.jpg", alt: "Far angle side bus" },
  { src: "/side_bus.jpg", alt: "Side bus" },
];

export default function ServicesSection() {
  return (
    <section sx={styles.services}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div
            className="position-relative col-12 col-lg-6 order-last order-lg-first mt-5 mt-lg-0"
            sx={styles.services.carousel}
          >
            <Carousel slides={carouselImages} />
          </div>
          <div className="col-12 col-lg-6 py-5">
            <div className="row">
              <div className="col-12 col-lg-8 mx-auto">
                <span className="badge rounded-pill" sx={{ background: "primary" }}>
                  Request a Vehicle
                </span>
                <h2 className="mt-3 mb-5 fs-1 fw-bold">Key Features</h2>
                <div className="d-flex mb-4 pb-1">
                  <span className="me-4 text-primary" sx={styles.services.icon}>
                    <Image src={"/security-camera.svg"} alt="bus" />
                  </span>
                  <div>
                    <h5>Accountable-Reliable-Safe</h5>
                    <p className="mb-0 text-muted lh-lg">
                      All MD vehicles are equipped with 2-way radios and internal cameras to ensure accountability,
                      reliability, and safety. All drivers carry cell phones as a backup communication device.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4 pb-1">
                  <span className="me-4 text-primary">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="-1.5 -1 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      className="jam jam-gps"
                    >
                      <path
                        sx={{ fill: "#F5A400" }}
                        d="M18.913 2.9L2.632 9.226l4.829 2.006a5.767 5.767 0 0 1 3.118 3.119l2.006 4.828L18.913 2.9zm1.847.682l-6.328 16.281c-.4 1.03-1.551 1.557-2.571 1.18a1.923 1.923 0 0 1-1.11-1.067l-2.007-4.83a3.845 3.845 0 0 0-2.079-2.078l-4.828-2.006C.833 10.645.375 9.486.814 8.472A2.05 2.05 0 0 1 1.949 7.38L18.23 1.052a1.945 1.945 0 0 1 2.53 2.53z"
                      ></path>
                    </svg>
                  </span>
                  <div>
                    <h5>GPS System</h5>
                    <p className="mb-0 text-muted lh-lg">
                      Our routes are tracked by GPS to ensure completion of services.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <span className="me-4 text-primary" sx={styles.services.icon}>
                    <Image src={"/school-bus.svg"} alt="bus" />
                  </span>
                  <div>
                    <h5>Vehicles</h5>
                    <p className="mb-0 text-muted lh-lg">
                      Our vehicles are safe, clean, and comfortable. Also, not only do we have large capacity school
                      buses, we have 7-passenger vans as well!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  services: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    height: "100%",
    width: "100%",
    icon: {
      width: "100px",
    },
    carousel: {
      "@media screen and (max-width: 400px)": {
        height: "300px",
      },
      height: "500px",
    },
  },
};
