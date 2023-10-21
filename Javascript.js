const navLinks = document.querySelectorAll("nav a");
const navImages = document.querySelectorAll("nav img");
var click1 = new Audio('Sounds/click1.wav');
var click2 = new Audio('Sounds/click2.wav');



navImages.forEach(image => {
  image.addEventListener("touchstart", event => {
    event.preventDefault();
  });
  image.addEventListener("mousedown", event => {
    event.preventDefault();
  });
  image.addEventListener("dragstart", event => {
    event.preventDefault();
  });
});

navLinks.forEach(link => {
  let sectionId;
  let section;
  let image;

  function resetImage() {
    // Replace the image source with the normal sprite
    if (image) {
      const src = image.getAttribute("src");
      const normalSrc = src.replace("Down.png", ".png");
      image.setAttribute("src", normalSrc);
      image = null;
    }
  }

  function scroll() {
    resetImage();

    // Scroll to the section
    if (section) {
      $("html, body").animate({ scrollTop: section.offset().top }, 500);
      section = null;
    }
  }

  link.addEventListener("mousedown", () => {
    resetImage();
    click1.play(); // Play click1 sound
    // Replace the image source with the pressed down sprite
    image = link.querySelector("img");
    const src = image.getAttribute("src");
    const downSrc = src.replace(".png", "Down.png");
    image.setAttribute("src", downSrc);

    // Get the section to scroll to
    sectionId = link.getAttribute("href");
    section = $(sectionId);
  });

  link.addEventListener("mouseup", () => {
    scroll();
    click2.play(); // Play click2 sound
  });

  link.addEventListener("touchstart", () => {
    resetImage();
    click1.play(); // Play click1 sound
    // Replace the image source with the pressed down sprite
    image = link.querySelector("img");
    const src = image.getAttribute("src");
    const downSrc = src.replace(".png", "Down.png");
    image.setAttribute("src", downSrc);

    // Get the section to scroll to
    sectionId = link.getAttribute("href");
    section = $(sectionId);
  });

  link.addEventListener("touchend", () => {
    scroll();
    click2.play(); // Play click2 sound
  });
});

// Reset all images when the mouse is released anywhere on the screen
window.addEventListener("mouseup", () => {
  navLinks.forEach(link => {
    const image = link.querySelector("img");
    const src = image.getAttribute("src");
    const normalSrc = src.replace("Down.png", ".png");
    image.setAttribute("src", normalSrc);
  });
});

// Preload the images to reduce lag
navLinks.forEach(link => {
  const image = link.querySelector("img");
  const src = image.getAttribute("src");
  const downSrc = src.replace(".png", "Down.png");

  const normalImg = new Image();
  normalImg.src = src;

  const downImg = new Image();
  downImg.src = downSrc;
});

