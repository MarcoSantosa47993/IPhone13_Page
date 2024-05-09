const circle = document.querySelectorAll(".circle");
let selected;
let img = document.querySelector(".img_product");
console.log(circle);

circle.forEach((c) => {
  c.addEventListener("click", (e) => {
    circle.forEach((c) => {
      if (c.classList.contains("selected")) {
        selected = c;
      }
    });
    if (c === selected) {
      return;
    } else {
      selected.className = "circle";
      c.className += " selected";
      switch (c.parentElement.className) {
        case "verde":
          img.src = "./img/iphone_green.jpg";
          break;
        case "patreado":
          img.src = "./img/iphone_silver.jpg";
          break;
        case "dourado":
          img.src = "./img/iphone_golden.jpg";
          break;
        case "grafite":
          img.src = "./img/iphone_grafite.jpg";
          break;
        case "azul":
          img.src = "./img/iphone_blue.jpg";
          break;
      }
    }
  });
});
