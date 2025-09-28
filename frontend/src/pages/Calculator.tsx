import { Header } from "../components/layout/Header/Header";
import { Calculator } from "../components/sections/Calculator/Calculator"
import { ContentWrapper } from "../components/ui/ContentWrapper/ContentWrapper"

const CalculatorPage = () => {
    return (
        <ContentWrapper>
            <Header />
            <Calculator />
        </ContentWrapper>
    )
}

export { CalculatorPage };