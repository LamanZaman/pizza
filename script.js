
document.querySelectorAll(".meats img").forEach(item => {
    item.addEventListener("dragstart", function (event) {
     
      event.dataTransfer.setData("text/plain", event.target.src);
    });
  });
  

  const pizza = document.getElementById("pizza");
  
  pizza.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  
  pizza.addEventListener("drop", function (event) {
    event.preventDefault();
  

    const ingredientSrc = event.dataTransfer.getData("text/plain");
  
    
    const rect = pizza.getBoundingClientRect();
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
  
   
    pizza.appendChild(ingredient);
  });
  