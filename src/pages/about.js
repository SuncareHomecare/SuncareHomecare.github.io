/** @jsxImportSource theme-ui */
import { ThemeProvider } from "@theme-ui/core";
import { theme } from "../../styles/theme";

import Layout from "components/layout";
import SEO from "components/seo";
import AboutSection from "sections/about";

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="About - School Bus and Van Transportation - MD Transportation" />
        <AboutSection />
      </Layout>
    </ThemeProvider>
  );
}
