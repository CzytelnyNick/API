var input = document.querySelector("input").value;
const link = `https://restcountries.com/v3.1/name/${input.value}`
// var str = JSON.stringify("https://restcountries.com/v3.1/name/Poland")
// console.log(str);
var names;
const table = document.querySelector("table")

const xhr = new XMLHttpRequest();


const sub = document.querySelector(".sub")
sub.addEventListener("click", () => {
    input = document.querySelector("input").value;
    console.log(input);
    xhr.onload = function(){
        const data = JSON.parse(xhr.response);
        data.forEach(el => {
            console.log(el.name.common);
        })
        table.style.display = "block";
    }

    xhr.open("GET", `https://restcountries.com/v3.1/name/${input}`,true);
    xhr.send();
})
table.addEventListener("load", () => {
    if(input == " ") 
        table.style.display = "none";
})
