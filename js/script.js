
const STEP = 25;

const changeStylesOfCircle = circle => {
  console.log(`Circle coords: x=${circle.x} y=${circle.y}`);
  circle.style.transform = `translateX(${circle.x}px) translateY(${circle.y}px)`;
};


const initApp = app => {
  let [circle, btn_up, btn_down, btn_left, btn_right,] = [
    app.querySelector(".field__circle"),
    app.querySelector(".field__btn-up"),
    app.querySelector(".field__btn-down"),
    app.querySelector(".field__btn-left"),
    app.querySelector(".field__btn-right")
    
  ];

  circle.x = 0;
  circle.y = 0;

  circle = new Proxy(circle, {
    set(target, prop, value) {
      if (["x", "y"].includes(prop)) {
        target[prop] = value;
        changeStylesOfCircle(target);
      }
    }
  });

  
 
  btn_up.addEventListener ("click", () =>{
    circle.y = circle.y - STEP;
  })
  
  btn_down.addEventListener("click", () => {
    circle.y = circle.y + STEP;
    changeStylesOfCircle(circle);
  });
  btn_left.addEventListener("click", () => {
    circle.x = circle.x - STEP;
    // changeStylesOfCircle(circle);
  });
  btn_right.addEventListener("click", () => {
    circle.x = circle.x + STEP;
    // changeStylesOfCircle(circle);
  });
  
  
  document.addEventListener("keydown", function e (event){
    
    
    
    console.log(event.key)
    
    if (event.key === "ArrowDown")
      circle.y = circle.y + STEP;
    
    if (event.key === "ArrowUp"){
      circle.y = circle.y - STEP;
      
    }
    if (event.key === "ArrowLeft"){
      circle.x = circle.x - STEP;
    }
    if (event.key === "ArrowRight"){
      circle.x = circle.x + STEP;
    }
  
  })
  
}





window.addEventListener("load", () => {
  const app = document.getElementsByClassName("app");
  Array.from(app).forEach(initApp);
});