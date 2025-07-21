import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  gap: 3rem;
  
  li {
    position: relative;  
  }

  li a {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 8px;  
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      height: 3px;
      width: 0;
      background-color: #246d52;
      border-radius: 2px 2px 0 0;
      margin-top: 4px;
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover::after {
      width: 100%;
    }
  }
`;