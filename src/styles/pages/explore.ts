import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  margin: 0px auto;
  background: var(--beige-500);

  padding: 10rem 1rem;
  gap: 3rem;
  overflow: hidden;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--brand-red);

    > h1 {
      font-size: 4rem;
    }

    @media (max-width: 900px) {
      text-align: center;

      > h1 {
        font-size: 2.5rem;
        line-height: 80%;

        margin-bottom: 2rem;
      }
    }
  }

  > .input {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;

    border: 1px solid var(--brand-red);
    border-radius: 1rem;

    padding: 0.75rem 1rem;
    color: var(--brand-red);

    width: 100%;
    max-width: 1200px;

    cursor: text;

    > svg {
      width: 100%;
      max-width: 1.25rem;
      height: 100%;
    }

    > input {
      width: 100%;

      background: unset;
      border: unset;

      outline: none;
      font-size: 1rem;

      &::placeholder {
        color: var(--black);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

export const SearchTopic = styled.span`
  color: var(--brand-red);
  font-size: 2rem;
  font-weight: bold;
`;
