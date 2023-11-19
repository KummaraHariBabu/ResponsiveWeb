// let hamburger = () => {
//     let list2 = document.getElementById("list2")
//     if(list2.style.display==="none") {
//         list2.style.display = "block"
//     } else {
//         list2.style.display = "none"
//     }
// }

function hamburger() {
    var x = document.getElementById("navBar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }