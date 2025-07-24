import styled from "styled-components";
import { Sun, Moon } from "lucide-react";
import { shade } from "polished";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${({ theme }) => shade(0.04, theme.colors.background)};
  display: flex;              
  align-items: center;
  z-index: 1000;

  border-bottom: 1px solid ${({ theme }) => theme.colors.text}22; /* borda leve */

  img {
    width: 120px;
  }
`;


export const Container = styled.div`
  width: 100%;   
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 8px 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 3px;

  svg {
    width: 18px;
    height: 18px;
    font-weight: bold;
  }
`;

export const SunIcon = styled(Sun)`
  color: #FFD700;
`;

export const MoonIcon = styled(Moon)`
  color: #f4effa;
`;

