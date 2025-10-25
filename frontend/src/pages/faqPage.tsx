import { Header } from "../components/layout/Header/Header";
import { ReponsiveNavbar } from "../components/layout/ResponsiveNavbar/ResponsiveNavbar";
import { Faq } from "../components/sections/Faq/Faq";
import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";
import { useState } from "react";

const FaqPage = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <ContentWrapper>
            <ReponsiveNavbar menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Faq />
        </ContentWrapper>
    )
}

export { FaqPage };