import { FeatureCards } from "../components/sections/FeatureCards/FeatureCards";
import { About } from "../components/layout/About/About";
import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";
import { Footer } from "../components/layout/Footer/Footer";
import { Header } from "../components/layout/Header/Header";
import { useState } from "react";
import { ReponsiveNavbar } from "../components/layout/ResponsiveNavbar/ResponsiveNavbar";
import { Demonstration } from "../components/layout/Demonstration/Demonstration";

const Home = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <ContentWrapper>
      <ReponsiveNavbar menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
      <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
      <FeatureCards />
      <About />
      <Demonstration />
      <Footer />
    </ContentWrapper>
  );
};

export { Home };