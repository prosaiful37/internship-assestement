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

// // button click open the layout
// let layout1 = document.getElementById('container');
// let layout2 = document.getElementById('layout2');
// let layout3 = document.getElementById('layout3');


// let showLayout1 = document.getElementById("container");
// let showLayout2 = document.getElementById("layout2");
// let showLayout3 = document.getElementById("layout3");

// function layout1() {
  
//   if (showLayout1.style.display == "none") {
//     showLayout1.style.display = "block";
//   } else {
//     showLayout1.style.display = "none";
//   }
// }
// function layout2() {
  
//   if (showLayout2.style.display == "none") {
//     showLayout2.style.display = "block";
//   } else {
//     showLayout2.style.display = "none";
//   }
// }
// function layout3() {
  
//   if (showLayout3.style.display == "none") {
//     showLayout3.style.display = "block";
//   } else {
//     showLayout3.style.display = "none";
//   }
// }


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


// document.getElementById("btn1").onclick = function () {
//   location.href = "../layout1/layout1.html";
// };