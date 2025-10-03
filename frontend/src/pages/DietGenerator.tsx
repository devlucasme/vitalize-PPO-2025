import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper";
import { DietGenerator } from "../components/sections/DietGenerator/DietGenerator";
import { Header } from "../components/layout/Header/Header";

const DietGeneratorPage = () => {
    return (
        <ContentWrapper>
            <Header />
            <DietGenerator />
        </ContentWrapper>
    )
}

export { DietGeneratorPage };