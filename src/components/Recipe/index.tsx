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
}

interface RecipeCardProps {
  recipe: RecipeProps;
}

export function Recipe({ recipe }: RecipeCardProps) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
    </div>
  );
}