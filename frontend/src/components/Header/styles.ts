import styled from "styled-components";
import { shade } from "polished";

export const Header = styled.header`
  width: 100%;
  background: ${props => shade(0.04, props.theme.colors.background)};
  display: flex;              
  align-items: center;        
  height: 75px;
  
  img {
    width: 150px;
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