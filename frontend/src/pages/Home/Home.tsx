import { FeatureCards } from "../../components/FeatureCards/FeatureCards";
import { About } from "../../components/About/About";
import { Footer } from "../../components/Footer/Footer";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";

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
