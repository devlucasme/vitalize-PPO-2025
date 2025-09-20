import styled from "styled-components";
import { Sun, Moon, User2 } from "lucide-react";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${({ theme }) => theme.colors.backgroundShade};
  display: flex;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const VitalizeLogo = styled.img`
  width: 110px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); 
  }

  @media (max-width: 1366px) {
    width: 100px;
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

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
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

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  opacity: 0.85;
  transition: opacity .3s ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1366px) {
    width: 34px;
    height: 34px;
  }
`;

export const UserIcon = styled(User2)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 18px;
  height: 18px;
`;