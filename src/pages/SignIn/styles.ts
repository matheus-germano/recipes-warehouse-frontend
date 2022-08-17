import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: calc(100vh - 90px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 20px;

  aside {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;

    h1 {
      max-width: 500px;
      font-size: 4rem;
      font-weight: 900;
    }

    img {
      width: 148px;
      position: absolute;
      top: 70px;
      right: 70px;
    }

    img + img {
      width: 128px;
      position: absolute;
      top: 20px;
      right: 20px;
      transform: rotate(-45deg);
    }
  }

  main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    border-left: 1px solid var(--grey);
  }
`;

export const Form = styled.form`
  width: 350px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border-radius: 5px;
  /* border: 1px solid var(--grey); */

  padding: 20px;

  h2 {
    font-weight: 900;
  }

  button {
    width: 100%;
  }

  a {
    color: var(--primary-yellow-orange);
    transition: 0.2s;

    &:hover {
      color: var(--primary-pumpkin);
    }
  }

  hr {
    width: 100%;
    background-color: var(--light-grey);
    border-color: var(--light-grey);
  }
`;

export const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: 700;
  }
`;