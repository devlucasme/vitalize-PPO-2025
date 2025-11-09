import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  scroll-margin-top: 80px;

  @media (max-width: 1024px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 720px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.8rem;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const TopDemo = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }

    /* === Mantido igual ao TopAbout === */
    @media (max-width: 1366px) {
      font-size: 1.7rem;
    }

    @media (max-width: 1200px) {
      font-size: 1.4rem;
    }

    @media (max-width: 960px) {
      font-size: 1.2rem;
    }

    @media (max-width: 720px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #f0fff4;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);

  thead {
    background: ${({ theme }) =>
      theme.title === "light"
        ? "linear-gradient(90deg, #184933, #2c7a58)"
        : "linear-gradient(90deg, #1b2430, #2d3748)"};

    th {
      padding: 1rem;
      font-weight: 600;
      font-size: 1rem;
      text-align: left;
      white-space: nowrap;

      &:first-child {
        text-align: center;
        width: 100px;
      }

      @media (max-width: 960px) {
        font-size: 0.95rem;
        padding: 0.9rem;
      }

      @media (max-width: 720px) {
        font-size: 0.9rem;
        padding: 0.8rem;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
        padding: 0.7rem;
      }

      @media (max-width: 360px) {
        font-size: 0.75rem;
      }
    }
  }

  tbody {
    tr {
      transition: background 0.3s ease;

      &:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.03);
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
      }

      td {
        padding: 1rem;
        vertical-align: middle;
        font-size: 0.95rem;

        &:first-child {
          text-align: center;
        }

        @media (max-width: 960px) {
          font-size: 0.9rem;
          padding: 0.9rem;
        }

        @media (max-width: 720px) {
          font-size: 0.85rem;
          padding: 0.8rem;
        }

        @media (max-width: 480px) {
          font-size: 0.8rem;
          padding: 0.7rem;
        }

        @media (max-width: 360px) {
          font-size: 0.75rem;
          padding: 0.6rem;
        }
      }
    }

    svg {
      color: #f0fff4;
      width: 25px;
      height: 25px;

      @media (max-width: 960px) {
        width: 23px;
        height: 23px;
      }

      @media (max-width: 720px) {
        width: 21px;
        height: 21px;
      }

      @media (max-width: 480px) {
        width: 19px;
        height: 19px;
      }
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepIcon = styled.svg`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 960px) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 720px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 360px) {
    width: 18px;
    height: 18px;
  }
`;
