const buttons = document.querySelector(".buttons").children;
const items = document.querySelector(".items").children;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");
    for (let j = 0; j < items.length; j++) {
      items[j].style.display = "none";
      if (items[j].getAttribute("data-id") === target) {
        items[j].style.display = "block";
      }
      if (target === "all") {
        items[j].style.display = "block";
      }
    }
  });
}
