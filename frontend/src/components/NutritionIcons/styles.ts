import { Calculator, Apple, SquareUser } from "lucide-react";
import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 2.5rem;
`

export const CalculatorIcon = styled(Calculator)`
    width: 80px;
    height: 80px;
    stroke: ${props => props.theme.colors.text};
    stroke-width: 1;
    fill: transparent;
    transition: fill .3s ease;

    &:hover {
        fill: #c7cd41;
        cursor: pointer;
    }

`

export const AppleIcon = styled(Apple)`
    width: 80px;
    height: 80px;
    stroke: ${props => props.theme.colors.text};
    stroke-width: 1;
    fill: transparent;
    transition: fill .3s ease;

    &:hover {
        fill: #cf3e3e;
        cursor: pointer;
    }

`

export const UserIcon = styled(SquareUser)`
    width: 80px;
    height: 80px;
    stroke: ${props => props.theme.colors.text};
    stroke-width: 1;
    fill: transparent;
    transition: fill .3s ease;

    &:hover {
        fill: #3ea3cf;
        cursor: pointer;
    }
`

// export const FoodIcon = styled(Apple)`
//   width: 40px;
//   height: 40px;
//   stroke: #38a169;
//   stroke-width: 1.5;
//   fill: transparent;
//   transition: fill 0.3s ease;

//   &:hover {
//     fill: #e53935;
//     cursor: pointer;
//   }
// `;
