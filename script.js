// Sample data: Recipes categorized into foods, snacks, and drinks
const recipesData = {
  foods: [
    { id: 1, name: 'rice', image: 'images/rice.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 2, name: 'food1', image: 'images/food1.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 3, name: 'food2', image: 'images/food2.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 4, name: 'food3', image: 'images/food3.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 5, name: 'food4', image: 'images/food4.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 6, name: 'food5', image: 'images/food5.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    // More foods can be added
  ],
  snacks: [
    { id: 7, name: 'pasta', image: 'images/pasta.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 8, name: 'sandwich', image: 'images/sandwich.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 9, name: 'popcorn', image: 'images/popcorn.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 10, name: 'pasta', image: 'images/pasta.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 11, name: 'sandwich', image: 'images/sandwich.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 12, name: 'popcorn', image: 'images/popcorn.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    // More snacks can be added
  ],
  drinks: [
    { id: 13, name: 'green-tea', image: 'images/green-tea.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 14, name: 'Smoothie', image: 'images/smoothie.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 15, name: 'green-tea1', image: 'images/green-tea1.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 16, name: 'green-tea', image: 'images/green-tea.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 17, name: 'Smoothie', image: 'images/smoothie.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    { id: 18, name: 'green-tea1', image: 'images/green-tea1.jpg', description: '<b>Ingredients:</b> rice, water, salt. <br/><b>Instructions:</b> Delicious pasta with tomato sauce.' },
    // More drinks can be added
  ]
};

let currentCategory = 'foods';  // Default category
let currentPage = 1;  // Default page

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

// Toggle menu on icon click
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Auto-close menu on link click (mobile UX improvement)
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Function to display recipes for the selected category
function showCategory(category) {
  currentCategory = category;
  currentPage = 1;
  renderRecipeList();
}

// Function to render recipe list based on current category and page
function renderRecipeList() {
  const recipes = recipesData[currentCategory];
  const recipesPerPage = 5;
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToDisplay = recipes.slice(startIndex, endIndex);

  // Update recipe list
  const recipeList = document.getElementById('recipeList');
  recipeList.innerHTML = '';
  recipesToDisplay.forEach(recipe => {
    const listItem = document.createElement('div');
    listItem.classList.add('recipe-item');
    listItem.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <span>${recipe.name}</span>
    `;
    listItem.onclick = () => showRecipeDetails(recipe);
    recipeList.appendChild(listItem);
  });

  // Update pagination controls
  const pagination = document.getElementById('pagination');
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  pagination.innerHTML = '';

  if (currentPage > 1) {
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Prev';
    prevButton.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prevButton);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.onclick = () => changePage(currentPage + 1);
    pagination.appendChild(nextButton);
  }
}

// Function to change pages
function changePage(page) {
  currentPage = page;
  renderRecipeList();
}

// Function to show recipe details on the right side
function showRecipeDetails(recipe) {
  const recipeDetails = document.getElementById('recipeDetails');
  recipeDetails.innerHTML = `

    <img src="${recipe.image}" alt="${recipe.name}" />
    <h3>${recipe.name}</h3>
    <p>${recipe.description}</p>
  `;
}

// Initial render
renderRecipeList();


if (window.innerWidth < 768) {
  cancelAnimationFrame(autoScroll);
}

