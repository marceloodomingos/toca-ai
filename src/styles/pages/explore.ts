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
            line-height: 100%;
          }
        }
    }

    > input {
        background: unset;
        border: 1px solid var(--brand-red);
        border-radius: 1rem;

        padding: .5rem 1rem;
        color: var(--brand-red);
        font-size: 1rem;

        width: 100%;
        max-width: 800px;

        &::placeholder {
            color: var(--black);
        }
    }
`