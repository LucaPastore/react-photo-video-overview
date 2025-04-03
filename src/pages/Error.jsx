import ErrorContent from "../components/ErrorContent";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function ErrorPage() {
  return (
    <>
      <Navigation />
      <main>
        <ErrorContent />
      </main>
      <Footer />
    </>
  );
}
