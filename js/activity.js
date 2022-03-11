let moreStuff = false;
let moreStuff2 = false;
let moreStuff3 = false;


function showStuff() {
    console.log("One works!");
    showHiddenInfo.classList.toggle("hidden");
    if (moreStuff) {
      moreStuff = true;
    }
  }
  function showStuff2() {
    console.log("Two works!");
    showHiddenInfo2.classList.toggle("hidden");
    if (moreStuff2) {
      moreStuff2 = true;
    }
  }
  function showStuff3() {
    console.log("Three works!");
    showHiddenInfo3.classList.toggle("hidden");
    if (moreStuff3) {
      moreStuff3 = true;
    }
  }
  const collapsibleEl = document.querySelector(".collapsible")
  const collapsibleEl2 = document.querySelector(".collapsible2")
  const collapsibleEl3 = document.querySelector(".collapsible3")
  const showHiddenInfo = document.querySelector(".content")
  const showHiddenInfo2 = document.querySelector(".content2")
  const showHiddenInfo3 = document.querySelector(".content3")
  showHiddenInfo.classList.add("hidden");
  showHiddenInfo2.classList.add("hidden");
  showHiddenInfo3.classList.add("hidden");
  collapsibleEl.addEventListener("click", () => {
    showStuff();
  })
  collapsibleEl2.addEventListener("click", () => {
    showStuff2();
  })
  collapsibleEl3.addEventListener("click", () => {
    showStuff3();
  })






// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }
