const counter = document.getElementById("number-of-words");
const text = document.querySelector("textarea");
let fnct = () => {
    counter.innerHTML = "<span class='text'>number of words </span>" + " " + (text.value.split(" ").length - 1) ;
}
text.addEventListener("input", fnct)