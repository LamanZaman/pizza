
const pizzaElement = document.getElementById("pizza");

function updatePizzaSize(size) {
  const sizeMap = {
    large: 500,
    medium: 400,
    small: 300
  };


  const newSize = sizeMap[size];
  pizzaElement.style.width = `${newSize}px`;
  pizzaElement.style.height = `${newSize}px`;

  pizzaElement.style.top = "50%";
  pizzaElement.style.left = "50%";
  pizzaElement.style.transform = "translate(-50%, -50%)";


  const pizzaImage = pizzaElement.querySelector("img");
  if (pizzaImage) {
    pizzaImage.style.width = `${newSize}px`;
    pizzaImage.style.height = `${newSize}px`;
  }
}


function updateCrustImage(crustType) {
  const crustImages = {
    classic: "picsart/photo/peperoniii.jpg",
    thin: "picsart/photo/reel.jpg",
    thinnest: "picsart/photo/vegetarian.jpg",
    double: "picsart/photo/hawai.jpg"
  };

 
  if (crustImages[crustType]) {

    const existingImage = pizzaElement.querySelector("img");
    if (existingImage) {
      pizzaElement.removeChild(existingImage);
    }

  
    const newImage = document.createElement("img");
    newImage.src = crustImages[crustType];
    newImage.style.clipPath = "circle(50% at 50% 50%)";
    newImage.style.width = pizzaElement.style.width || "500px";
    newImage.style.height = pizzaElement.style.height || "500px";
    newImage.style.position = "relative";

    pizzaElement.appendChild(newImage);
  }
}


document.querySelectorAll("input[name='size']").forEach(input => {
  input.addEventListener("change", (event) => {
    const selectedSize = event.target.value;
    updatePizzaSize(selectedSize);
  });
});


document.querySelectorAll("input[name='crust']").forEach(input => {
  input.addEventListener("change", (event) => {
    const selectedCrust = event.target.value;
    updateCrustImage(selectedCrust);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  updatePizzaSize('large'); 
});


document.querySelectorAll(".meats img").forEach(item => {
  item.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", event.target.src);
  });
});

pizzaElement.addEventListener("dragover", function (event) {
  event.preventDefault();
});

pizzaElement.addEventListener("drop", function (event) {
  event.preventDefault();


  const ingredientSrc = event.dataTransfer.getData("text/plain");


  const rect = pizzaElement.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;


  const ingredient = document.createElement("img");
  ingredient.src = ingredientSrc;


  ingredient.style.position = "absolute";
  ingredient.style.left = `${offsetX - 25}px`; 
  ingredient.style.top = `${offsetY - 25}px`; 
  ingredient.style.width = "50px";
  ingredient.style.height = "50px"; 
  ingredient.draggable = false; 


  pizzaElement.appendChild(ingredient);
});
