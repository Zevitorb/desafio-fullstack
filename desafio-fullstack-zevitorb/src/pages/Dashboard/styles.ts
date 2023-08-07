import styled from "styled-components"

export const StyledHeader = styled.header`
  height: 100px;
  padding: 40px;
  background-color: var(--color-blue-400);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 4rem;
  }

  .exitButton {
    position: fixed;
    top: 60px;
    right: 20px;
    width: 60px;
    border: none;
    cursor: pointer;
    padding: 10px 15px;

    font-weight: bold;
  }
`

export const StyledMain = styled.main`
  background-color: var(--color-blue-100);
  height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }
`
