//Modal windows (pop-ups)
document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".play-btn");

  playButton.addEventListener("click", () => {
    alert("Audio playback not implemented.");
  });
});

document.querySelectorAll(".thumbnail").forEach((image) => {
  image.addEventListener("click", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const modalImage = document.createElement("img");
    modalImage.src = this.src;
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
    modal.addEventListener("click", () => modal.remove());
  });
});

//Underline links when scrolling
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".space-1, .space");
  const navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const link = navLinks[index];

    if (rect.top <= 0 && rect.bottom >= 0) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
