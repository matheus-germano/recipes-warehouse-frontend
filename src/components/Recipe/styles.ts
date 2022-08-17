import styled from 'styled-components';

export const RecipePreview = styled.div`
  flex: 1;
  height: 250px;

  border-radius: 5px;
  border: 1px solid var(--light-grey);

  padding: 20px;

  cursor: pointer;
  transition: .2s;

  &:hover {
    border: 1px solid var(--primary-yellow-orange);
  }
`;

export const RecipePreviewHeader = styled.div`
  width: 100%;
  height: 100px;

  img {
    width: 100%;
  }
`;

export const RecipePreviewHeaderTexts = styled.div`
  width: 100%;

  display: flex;
  align-items: top;
  justify-content: space-between;
`;

export const Likes = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 10px;

  p {
    text-align: center;
    font-size: 0.875rem;
  }
  svg {
    cursor: pointer;
    align-self: center;
  }
`;

export const RecipePreviewBody = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    text-align: justify;
    overflow: hidden; /* remove o estouro do elemento */
    text-overflow: ellipsis; /* adiciona “...” no final */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* quantidade de linhas */
    -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */
  }
`;

export const RecipeInfos = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;
  color: var(--muted);

  p {
    max-width: 50%;
    text-align: left;
    overflow: hidden; /* remove o estouro do elemento */
    text-overflow: ellipsis; /* adiciona “...” no final */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* quantidade de linhas */
    -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */
  }
`;