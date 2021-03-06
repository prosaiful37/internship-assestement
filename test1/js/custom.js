//  active class to current button
let nav = document.getElementById("nav");
let btns = document.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

// layout settings

let allLayouts = ['layout-1', 'layout-2', 'layout-3'];
let visibleId = null;

function show(id){
  if(visibleId !== id){
    visibleId = id;
  }
  hide();
}

function hide(){
  let div, i, id;
  for(i = 0; i < allLayouts.length; i++){
    id = allLayouts[i];
    div = document.getElementById(id);
    if(visibleId === id){
      div.style.display = "block";
    }
    else{
      div.style.display = "none";
    }
  }
}

