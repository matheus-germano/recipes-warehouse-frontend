import styled from 'styled-components';

export const RecipesContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  margin: 0 auto;
  padding-top: calc(90px + 50px);
`;

export const NoRecipes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 0 auto;

  img {
    height: 128px;
  }
`;

export const RecipesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;