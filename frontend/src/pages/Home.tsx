import { FeatureCards } from "../components/FeatureCards/FeatureCards";
import { About } from "../components/About/About";
import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <ContentWrapper>
      <FeatureCards />
      <About />
      <Footer />
    </ContentWrapper>
  );
};

export { Home };