 let elem = document.createElement("div");
elem.innerHTML = "<link rel='stylesheet' href='https://yagrado.github.io/web-dev/header.css'>"
document.body.prepend(elem);

fetch("https://yagrado.github.io/web-dev/header.html")
.then((output)=> output.text())
.then((text)=> {elem.innerHTML =  elem.innerHTML + text;})
.catch((e) => console.error(e));

