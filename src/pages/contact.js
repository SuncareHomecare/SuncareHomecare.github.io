/** @jsxImportSource theme-ui */
import { ThemeProvider } from "@theme-ui/core";
import { theme } from "../../styles/theme";

import Layout from "components/layout";
import SEO from "components/seo";
import Contact from "sections/contact";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Contact Us - School Bus and Van Transportation - MD Transportation" />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
