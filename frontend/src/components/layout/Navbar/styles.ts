import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  gap: 4rem;
  
  li {
    position: relative;  
  }

  li a {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 8px;  
    position: relative;
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      height: 3px;
      width: 0;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 2px 2px 0 0;
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }

    &:hover::after {
      width: 100%;
    }

    @media (max-width: 1366px) {
      font-size: 1rem;
    }
  }
`;