/** @jsxImportSource theme-ui */
import Header from "./header/header";
import Footer from "footer/footer";

export default function Layout({ children }) {

  return (
    <div id="layout" sx={{width: "100vw"}}>
      <Header />
      <main id="content" sx={{ variant: "layout.main" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
