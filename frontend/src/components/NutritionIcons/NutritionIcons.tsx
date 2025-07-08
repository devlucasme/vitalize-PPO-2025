// import { Apple, Calculator } from "lucide-react";
import type { FC } from "react";
import * as S from "./styles";

const NutritionIcons: FC = () => {
    return (
        <S.Container>
            <div>
                <S.CalculatorIcon />
            </div>
            <div>
                <S.AppleIcon />
            </div>
            <div>
                <S.UserIcon />
            </div>
        </S.Container>
    )
}

export { NutritionIcons }