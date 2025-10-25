import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper"
import { Header } from "../components/layout/Header/Header";
import { TrainingGenerator } from "../components/sections/TrainingGenerator/TrainingGenerator";
import { ReponsiveNavbar } from "../components/layout/ResponsiveNavbar/ResponsiveNavbar";
import { useState } from "react";

const TrainingGeneratorPage = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <ContentWrapper>
            <ReponsiveNavbar menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            < TrainingGenerator />
        </ContentWrapper>
    )
}

export { TrainingGeneratorPage };