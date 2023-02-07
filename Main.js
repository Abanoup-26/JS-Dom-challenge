let myHeader = document.createElement("div");
myHeader.setAttribute("class", "Container");
myHeader.setAttribute("Style", "display:Flex");

let myUl = document.createElement("ul");
let myFirstLi = document.createElement("li");
let mySecondLi = document.createElement("li");
let myThirdLi = document.createElement("li");
let myFourLi = document.createElement("li");

let myFirstLiLink = document.createElement("a");
let mySecondLiLink = document.createElement("a");
let myThirdLiLink = document.createElement("a");
let myFourLiLink = document.createElement("a");
let myHeaderP = document.createElement("p");
myFirstLiLink.setAttribute("href", "#");
mySecondLiLink.setAttribute("href", "#");
myThirdLiLink.setAttribute("href", "#");
myFourLiLink.setAttribute("href", "#");

// Style
myHeader.style.height = "60px";
myHeader.style.width = "100%";
myHeader.style.backgroundColor = "#000";
myHeader.style.display = "flex";
myHeaderP.style.fontSize = "20px";
myHeaderP.style.marginLeft = "15px";
myHeaderP.style.flex = "1";
myHeaderP.style.color = "green";
myUl.style.listStyle = "none";
myUl.style.display = "flex";
myUl.style.flexDirection = "row";

myFirstLi.style.padding = "10px";
mySecondLi.style.padding = "10px";
myThirdLi.style.padding = "10px";
myFourLi.style.padding = "10px";

myUl.style.justifyContent = "flex-end";
myUl.style.alignItems = "center";

// Appendind
myHeaderP.append("Eppo");
myHeader.append(myHeaderP);
myFirstLiLink.innerHTML = "Home";
mySecondLiLink.innerHTML = "Service";
myThirdLiLink.innerHTML = "About";
myFourLiLink.innerHTML = "Contact";
myFirstLi.appendChild(myFirstLiLink);
mySecondLi.appendChild(mySecondLiLink);
myThirdLi.appendChild(myThirdLiLink);
myFourLi.appendChild(myFourLiLink);
myUl.append(myFirstLi, mySecondLi, myThirdLi, myFourLi);
myHeader.appendChild(myUl);
document.body.appendChild(myHeader);
console.log(myHeader);

//prodcut div
let prodcutDiv = document.createElement("div");
prodcutDiv.className = "product";
prodcutDiv.style.padding = "20px";
prodcutDiv.style.backgroundColor = "powderblue";
prodcutDiv.style.border = "1px sold rgb(221, 221, 221)";
prodcutDiv.style.width = "calc((100% - 40px) / 3)";
prodcutDiv.style.boxSizing = "border-box";
prodcutDiv.style.textAlign = "center";
prodcutDiv.style.color = "rgb(136,136,136)";
prodcutDiv.style.borderRadius = "6px";

prodcutDiv.style.marginBottom = "10px";

// mylanding
let landingDiv = document.createElement("div");
landingDiv.className = "landing";
landingDiv.style.display = "flex";
landingDiv.style.flexWrap = "wrap";
landingDiv.style.flexBasis = "900px";
landingDiv.style.gap = "15px";
landingDiv.style.backgroundColor = "gray";

// span in product

let spanProduct = document.createElement("span");
spanProduct.style.textAlign = "center";
spanProduct.style.display = "flex";
spanProduct.style.justifyContent = "center";
spanProduct.innerHTML = "Product";

for (let i = 0; i < 15; i++) {
  prodcutDiv.innerHTML = `${i + 1}`;
  prodcutDiv.append(spanProduct);
  landingDiv.append(prodcutDiv.cloneNode(true));
}
document.body.append(landingDiv);

let myFooter = document.createElement("footer");
myFooter.style.backgroundColor = "green";
myFooter.style.textAlign = "center";
myFooter.style.height = "60px";
myFooter.style.lineHeight = "3.5";
myFooter.style.marginTop = "10px";
myFooter.innerHTML = "Copyright 2023 ";

document.body.append(myFooter);
