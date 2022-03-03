const categories = document.querySelector("#categories");
const categoriesArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}
    Elements: ${element.querySelector("ul").children.length}`);
});
