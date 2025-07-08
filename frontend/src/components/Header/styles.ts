import styled from "styled-components";
// import { Apple } from "lucide-react";
import { shade } from "polished";


export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    padding: 0 30px;
    background: ${props => shade(0.04, props.theme.colors.background)};

    img {
        width: 200px;
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



