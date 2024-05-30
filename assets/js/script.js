let li = document.querySelectorAll("li");
let parentDiv = document.querySelector(".wrapper");
let childCount = parentDiv.children.length;

li.forEach((element, index) => {
  element.addEventListener("click", () => {
    let src = element.children[0].children[0].src;
    let content = element.children[0].children[1].innerText;
    if (parentDiv.children.length === childCount) {
      // Modal div create here
      let modal = document.createElement("div");
      parentDiv.appendChild(modal);
      modal.classList.toggle("modal");
      // figure tag create here
      let figure = document.createElement("figure");
      figure.classList.toggle("modal-figure");
      //img tag create here
      let img = document.createElement("img");
      let figcaption = document.createElement("figcaption");
      figure.append(img, figcaption);
      img.setAttribute("src", src);
      figcaption.innerText = content;
      //close icon
      let close = document.createElement("span");
      close.classList.toggle("close");
      modal.append(figure, close);
      let modalE = document.querySelector(".modal");

      modalE.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(img);
        if (e.target != img && e.target != figure && e.target != figcaption) {
          parentDiv.removeChild(modal);
        }
      });
    }
  });
});
