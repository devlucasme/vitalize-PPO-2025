import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";
import { DietGenerator } from "../components/sections/DietGenerator/DietGenerator";
import { ReponsiveNavbar } from "../components/layout/ResponsiveNavbar/ResponsiveNavbar";
import { Header } from "../components/layout/Header/Header";
import { useState } from "react";

const DietGeneratorPage = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <ContentWrapper>
            <ReponsiveNavbar menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <DietGenerator />
        </ContentWrapper>
    )
}

export { DietGeneratorPage };