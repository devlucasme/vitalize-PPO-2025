import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  gap: 4rem;
  align-items: center; 

  li {
    position: relative;
    display: flex;
  }

  li a,
  li button {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 6px;
    position: relative;
    text-decoration: none;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

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

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 1440px) {
    gap: 3rem;
    li a,
    li button {
      font-size: 1rem;
    }
  }

  @media (max-width: 1366px) {
    gap: 2.5rem;
    li a,
    li button {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 1024px) {
    gap: 2rem;
    li a,
    li button {
      font-size: 0.9rem;
    }
  }
`;

export const DropdownCard = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.background || theme.colors.secondary};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-width: 180px;
  z-index: 100;
  padding: 10px;
  animation: fadeIn 0.4s ease;

  a {
    padding: 0.45rem 0.8rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 400;
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.2s ease, opacity 0.2s ease;

    &::after {
      display: none !important;
    }

    &:hover {
      opacity: 0.85;
      background: ${({ theme }) =>
        theme.title === "light"
          ? "rgba(0, 0, 0, 0.05)"
          : "rgba(255, 255, 255, 0.08)"};
    }

    &:first-child {
      border-radius: 8px 8px 0 0;
    }

    &:last-child {
      border-radius: 0 0 8px 8px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -8px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;