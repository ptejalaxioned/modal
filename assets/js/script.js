let li = document.querySelectorAll("li");
let parentDiv = document.querySelector(".wrapper");
let childCount = parentDiv.children.length;

li.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(element.children[0].children[0].src);
let src=element.children[0].children[0].src
    if (parentDiv.children.length === childCount) {
        // Modal div create here
      let modal = document.createElement("div");
      parentDiv.appendChild(modal);
      modal.classList.toggle("modal")
      // figure tag create here
      let figure = document.createElement("figure");
      modal.appendChild(figure);
      // Style
      figure.style.width="20%"
      //img tag create here
      let img = document.createElement("img");
      figure.appendChild(img);
      img.setAttribute("src",src)
      // Style
      img.style.width="100%"
      console.log(parentDiv,img.src);
     
    }
  });
});

// <div class="modal">
// <figure class="video-bg">
//   <img
//     src="./assets/images/images/about-video-bg.jpg"
//     alt="Video"
//   />
// </figure>
// <figure class="close">
//   <img src="./assets/images/images/close.png" alt="Close" />
// </figure>
// </div>

// .modal {
//     width: 100%;
//     height: 100%;
//     display: none;
//     position: fixed;
//     z-index: 3;
//     left: 0;
//     top: 0;
//     background-color: rgb(0, 0, 0);
//     background-color: rgba(0, 0, 0, 0.4);
//     overflow: auto;
//   }

//   .video-bg {
//     width: 40%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }

//   .close {
//     width: 3%;
//     position: absolute;
//     z-index: 3;
//     top: 5%;
//     right: 5%;
//   }
