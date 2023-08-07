import styled from "styled-components"

export const StyledMain = styled.main`
  height: 100vh;
  padding-top: 100px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--color-blue-600);

  h1 {
    font-size: 6rem;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: var(--color-gray-200);
    border-radius: 10px;

    width: 300px;
    padding: 40px 10px;
    margin: 0 auto;

    button {
      cursor: pointer;
      font-weight: bold;
      background-color: var(--color-blue-800);

      width: 100%;
      height: 40px;

      border-radius: 6px;
      border: none;
    }

    p {
      font-size: 2rem;
    }

    a {
      cursor: pointer;
      font-weight: bold;
      font-size: 2rem;

      border-radius: 6px;
      border: none;
    }
  }
`
