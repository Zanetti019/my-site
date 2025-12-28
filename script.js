console.log("Site carregado com sucesso!");
const header = document.querySelector("header");

if (window.innerWidth > 768) {
  header.addEventListener("mousemove", function (e) {
    const trail = document.createElement("div");
    trail.classList.add("mouse-trail");

    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";

    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 800);
  });
}