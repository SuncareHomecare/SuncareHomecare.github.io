/** @jsxImportSource theme-ui */
import { ThemeProvider } from "@theme-ui/core";
import { theme } from "../../styles/theme";

import Layout from "components/layout";
import SEO from "components/seo";
import ServicesSection from "sections/services";
import Form from "sections/form";

export default function Services() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Services - School Bus and Van Transportation - MD Transportation" />
        <ServicesSection />
        <Form />
      </Layout>
    </ThemeProvider>
  );
}
