import AdBanner from "./ad-banner"
import Nav from "./Nav";
import Footer from "./Footer";

function CustomerLayout({ children }) {
  return (
    <>
      <AdBanner />
      <Nav />
      <main
        style={{
          marginTop: "16rem",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1400px",
          padding: "5rem"
        }}
      >
        {children}
      </main>

      <Footer />
    </>
  );
}

export default CustomerLayout;
