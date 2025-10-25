import styled from "styled-components";
import { Sun, Moon, User2, Menu } from "lucide-react";

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

export const Container = styled.div`
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 860px) {
    max-width: 95%;
  }
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

  @media (max-width: 860px) {
    width: 90px;
  }
`;

export const DesktopNavbar = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 950px) { 
    display: none;
  }
`;

export const MenuIconWrapper = styled.div`
  display: none;

  @media (max-width: 950px) { 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 950px) {
    gap: 1rem;
  }
`;

export const DesktopProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  opacity: 0.85;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 950px) { 
    display: none;
  }
`;

export const UserIcon = styled(User2)`
  color: #fff;
  width: 18px;
  height: 18px;
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
  color: #e0a61dff;
`;

export const MoonIcon = styled(Moon)`
  color: #f4effa;
`;

export const MobileMenuButton = styled(Menu)`
  display: none;
  cursor: pointer;

  @media (max-width: 950px) {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    width: 28px;
    height: 28px;
  }
`;