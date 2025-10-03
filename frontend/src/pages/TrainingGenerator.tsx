import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper"
import { Header } from "../components/layout/Header/Header";
import { TrainingGenerator } from "../components/sections/TrainingGenerator/TrainingGenerator";

const TrainingGeneratorPage = () => {
    return (
        <ContentWrapper>
            <Header />
            < TrainingGenerator/>
        </ContentWrapper>
    )
}

export { TrainingGeneratorPage };