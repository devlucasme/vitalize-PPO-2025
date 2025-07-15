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
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;    
      height: 3px;  
      width: 0;     
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease;
      border-radius: 2px 2px 0 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover::after {
      width: 100%; 
    }
  }
`;
