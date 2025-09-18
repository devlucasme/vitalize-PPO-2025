import { FeatureCards } from "../components/sections/FeatureCards/FeatureCards";
import { About } from "../components/layout/About/About";
import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";
import { Footer } from "../components/layout/Footer/Footer";
import { Header } from "../components/layout/Header/Header";

const Home = () => {
  return (
    <ContentWrapper>
      <Header />
      <FeatureCards />
      <About />
      <Footer />
    </ContentWrapper>
  );
};

export { Home };