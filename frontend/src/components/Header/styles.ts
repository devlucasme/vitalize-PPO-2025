import styled from "styled-components";
import { shade } from "polished";

export const Header = styled.header`
  width: 100%;
  background: ${({ theme }) => shade(0.04, theme.colors.background)};
  display: flex;              
  align-items: center;
  height: 70px;
  
  img {
    width: 130px;
  }

`

export const Container = styled.div`
    width: 100%;   
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8px 0;
`