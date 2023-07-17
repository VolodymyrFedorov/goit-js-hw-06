const categoriesElem = document.getElementById('categories');

const categoryItems = categoriesElem.querySelectorAll('li.item');

const categoryCount = categoryItems.length;
console.log(`Number of categories ${categoryCount}`);


categoryItems.forEach((item) => {
  const titleElem = item.querySelector('h2');
  const title = titleElem.textContent;

  const categoryList = item.querySelectorAll('li');
  const itemCount = categoryList.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
