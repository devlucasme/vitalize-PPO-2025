import { Header } from "../components/layout/Header/Header";
import { UserProfile } from "../components/sections/UserProfile/UserProfile";
import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";

const UserPage = () => {
    return (
        <ContentWrapper>
            <Header />
            <UserProfile />
        </ContentWrapper>
    )
}

export { UserPage };