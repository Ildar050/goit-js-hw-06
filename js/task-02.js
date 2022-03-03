const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createTag = function (elem) {
  const tag = document.createElement("li");
  tag.textContent = elem;
  tag.classList.add("item");
  return tag;
};

const ingredientArray = ingredients.map(createTag);

const ingredientsArr = document.querySelector("#ingredients");
ingredientsArr.append(...ingredientArray);
