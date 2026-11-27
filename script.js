const heading_text = document.getElementById("demo");

const texts = ["Hello CSS", "Hello JavaScript"];
let i = 0;

setInterval(() => {
    heading_text.innerHTML = texts[i];
    i = (i + 1) % texts.length;
}, 1000);