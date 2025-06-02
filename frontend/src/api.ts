const API_URL = import.meta.env.VITE_API_URL;

export const searchRecipes = async (searchTerm: string, page: number) => {
  const url = new URL(`${API_URL}/api/recipes/search`);
  url.searchParams.append("searchTerm", searchTerm);
  url.searchParams.append("page", page.toString());

  const response = await fetch(url.toString());
  return await response.json();
};

export const getRecipeSummary = async (recipeId: string) => {
  const url = `${API_URL}/api/recipes/${recipeId}/summary`;
  const response = await fetch(url);
  return await response.json();
};

export const addFavouriteRecipe = async (recipe: { id: number }) => {
  const url = `${API_URL}/api/recipes/favourite`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recipeId: recipe.id }),
  });

  return await response.json();
};

export const removeFavouriteRecipe = async (recipe: { id: number }) => {
  const url = `${API_URL}/api/recipes/favourite`;
  await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recipeId: recipe.id }),
  });
};

export const getFavouriteRecipes = async () => {
  const url = `${API_URL}/api/recipes/favourite`;
  const response = await fetch(url);
  return await response.json();
};
