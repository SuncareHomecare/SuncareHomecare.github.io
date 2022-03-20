/** @jsxImportSource theme-ui */
import { ThemeProvider } from "@theme-ui/core";
import { theme } from "../../styles/theme";

import Layout from "components/layout";
import SEO from "components/seo";
import Banner from "sections/banner";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="School Bus and Van Transportation - MD Transportation" />
        <Banner />
      </Layout>
    </ThemeProvider>
  );
}
