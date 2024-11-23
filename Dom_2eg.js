let z=document.getElementById("para");
z.style.backgroundColor="orangered"
let pChildElem=document.createElement("div");
let naniImg=document.createElement("img")
naniImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRDdj2l_NWrpRJPal4CUAeazNezMv17XNIQ&s"
pChildElem.textContent="hello..!how are you"

z.append(pChildElem,naniImg)
z.removeChild(naniImg)
z.replaceChild(naniImg,pChildElem)

let mashaImg=document.createElement("iframe")
mashaImg.frameBorder=1
mashaImg.src="https://m.media-amazon.com/images/S/pv-target-images/df6f95ba2aa01aa7d74a4ccf752b5cda114c2ec0af00d6bd3ac65318fd0cc860.png"
mashaImg.width=500;
mashaImg.height=500;
z.replaceChild(mashaImg,naniImg)

const cloneEle=z.cloneNode(true)
document.body.append(cloneEle)

let roseImg=document.createElement("img")
roseImg.setAttribute("src","https://i5.walmartimages.com/seo/50-Stems-of-Red-Roses-Beautiful-Fresh-Cut-Flowers-Express-Delivery_1c4c6bc6-1111-48f8-91a5-7741d0731746.37812509bc78905d2daea21fac5fba3e.png")
roseImg.setAttribute("width","300")
document.body.appendChild("roseImg")
console.log(roseImg)

let divTag=document.createElement("div")
divTag.className="pav"
divTag.classList.add("mahe")
divTag.classList.add("chintu")
divTag.classList.add("chinni")
divTag.classList.remove("pav")
divTag.classList.replace("chinni","ammu")
console.log(divTag)

naniImg.addEventListener("click", function(){
    alert("Good Night")
})

let p=document.querySelector("div")
console.log(p.parentElement);
console.log(p.parentNode);
console.log(p)
console.log(div.children)
console.log(firstChild);
console.log(firstElementChild);

let twoP=document.querySelector(".two")
console.log(twoP.nextSibling);
console.log(twoP.nextElementSibling);

let P=document.querySelector(".two")
P.insertAdjacentElement("afterend", naniImg)