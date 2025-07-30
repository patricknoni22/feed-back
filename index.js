
let oneDivs = document.querySelector("div");
let twoDiv = document.createElement("div")
let eleCd = document.querySelectorAll(".one")
let btns = document.querySelector(".btn")
let arrTxt = []

// let sp1 = document.querySelector(".sp1").textContent;
// let sp2 = document.querySelector(".sp2").textContent;
// let sp3 = document.querySelector(".sp3").textContent;
btns.addEventListener("click", clearDis);

// arrTxt.push(sp1,sp2,sp3);
console.log(arrTxt);

function clearDis() {
  // oneDivs.remove(eleChild)
  addDiv()  
  eleCd.forEach(eleCd => {
    eleCd.classList.toggle("cls")
  })
}

function addDiv() {

  twoDiv.innerHTML = `
  Thank you for your feed back 
  💕💖💖
   <a href="index.html">home page</a>

  `;
  twoDiv.classList.add("one")

  oneDivs.append(twoDiv)

}

