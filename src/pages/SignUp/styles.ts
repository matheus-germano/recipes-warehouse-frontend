import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
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