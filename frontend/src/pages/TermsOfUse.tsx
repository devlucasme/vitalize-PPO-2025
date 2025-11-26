import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";
import { Header } from "../components/layout/Header/Header";
import { ReponsiveNavbar } from "../components/layout/ResponsiveNavbar/ResponsiveNavbar";
import { TermsOfUse } from "../components/sections/TermsOfUse/TermsOfUse";
import { useState } from "react";

const TermsOfUsePage = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <ContentWrapper>
            <ReponsiveNavbar menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
            <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <TermsOfUse />
        </ContentWrapper>
    )
}

export { TermsOfUsePage }