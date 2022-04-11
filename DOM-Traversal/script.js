
const grandparent = document.getElementById("grandparent-id");

const parent1 = grandparent.children[0] 
const parent2 = grandparent.children[1] 

const childs = Array.from(document.getElementsByClassName("child"));

childs.forEach(child => {
    changeColor(child);
})


function changeColor(element) {
    element.style.backgroundColor = "black"
}