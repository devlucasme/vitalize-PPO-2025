import { Header } from "../components/layout/Header/Header";
import { Faq } from "../components/sections/Faq/Faq";
import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";

const FaqPage = () => {
    return (
        <ContentWrapper>
            <Header />
            <Faq />
        </ContentWrapper>
    )
}

export { FaqPage };