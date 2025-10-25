import { Header } from "../components/layout/Header/Header";
import { UserProfile } from "../components/sections/UserProfile/UserProfile";
import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";
import { ReponsiveNavbar } from "../components/layout/ResponsiveNavbar/ResponsiveNavbar";
import { useState } from "react";

const UserPage = () => {

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <ContentWrapper>
            <ReponsiveNavbar menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <UserProfile />
        </ContentWrapper>
    )
}

export { UserPage };