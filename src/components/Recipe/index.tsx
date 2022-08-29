import { AiOutlineHeart } from 'react-icons/ai';

import { RecipePreview, RecipePreviewHeader, RecipePreviewHeaderTexts, Likes, RecipeInfos, RecipePreviewBody } from './styles';

import recipesPattern from '../../assets/images/recipes-pattern.jpg';

interface RecipeProps {
  id: number;
  name: string;
  type: number;
  description: string;
  image: string;
  preparationMethod: string;
  likes: number;
  createdBy: string;
  isRecipeOwner: boolean;
  createdAt: Date;
  likedByUser: boolean;
}

interface RecipeCardProps {
  recipe: RecipeProps;
}

const recipeTypes = [
  {
    type: 0,
    text: 'Doces e sobremesas'
  },
  {
    type: 1,
    text: 'Massas'
  },
  {
    type: 2,
    text: 'Bebidas'
  },
  {
    type: 3,
    text: 'Salgados'
  },
];

function handleRecipeLike() {

}

export function Recipe({ recipe }: RecipeCardProps) {
  return (
    <RecipePreview>
      <RecipePreviewHeader>
        <RecipePreviewHeaderTexts>
          <h3>{recipe.name}</h3>
          <Likes>
            <AiOutlineHeart size={24} />
            <p>{recipe.likes}</p>
          </Likes>
        </RecipePreviewHeaderTexts>
      </RecipePreviewHeader>
      <RecipePreviewBody>
        <RecipeInfos>
          <p>{recipeTypes.filter(recipeType => recipeType.type === recipe.type)[0].text}</p>
          <p>{new Intl.DateTimeFormat('pt-BR').format(new Date(recipe.createdAt))}</p>
        </RecipeInfos>
        <p>{recipe.description}</p>
      </RecipePreviewBody>
    </RecipePreview>
  );
}