import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 85%;
  margin: 4rem auto;
  display: flex;
  gap: 2rem;
`;

export const LeftColumn = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProfileContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundShade};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProgressContainer = styled(ProfileContainer)``;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    h2 {
      font-size: 1.7rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const EditButtonWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const ProfileSection = styled.section`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  button {
    margin: 0 auto;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 0.5rem;
  }
`;

export const TipsContainer = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundShade};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TipCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundDarkShade};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  transition: transform .3s ease, box-shadow .3s ease;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;