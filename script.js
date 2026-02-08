// opening the tabs
const appIcon = document.querySelectorAll(".appIcon");

appIcon.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    const targetId = icon.getAttribute("data-target");
    const targetWindowOpen = document.getElementById(targetId);

    if (targetWindowOpen) {
      gsap.to(targetWindowOpen, {
        scale: 1,
        duration: 0.5,
        autoAlpha: 1,
        ease: "back.out(1.7)",
      });
    }
  });
  const title = document.querySelectorAll(".title");
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      scale: 1.2,
      duration: 0.3,
      ease: "back.out(2)",
      y: -10,
    });
    title[index].style.display = "inline";
  });
  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      scale: 1,
      duration: 0.3,
      ease: "back.out(2)",
      y: 0,
    });
    title[index].style.display = "none";
  });
});

//closing the tabs
const close = document.querySelectorAll(".close");
close.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetWindowClose = btn.closest(".desktop-window");
    gsap.to(targetWindowClose, {
      scale: 0.8,
      autoAlpha: 0,
      duration: 0.3,
      ease: "power5.out",
    });
    navbar.classList.remove("nav-hide");
  });
});

// maximize the tab
const maximize = document.querySelectorAll(".maximize");
maximize.forEach((btn) => {
  btn.addEventListener("click", () => {
    var targetWindow = btn.closest(".desktop-window");
    gsap.to(targetWindow, {
      height: "100%",
      width: "100%",
      duration: 0.3,
      ease: "power2.in",
    });
    navbar.classList.add("nav-hide");
  });
});

//minimize the tab
const navbar = document.querySelector(".nav");
const minimize = document.querySelectorAll(".minimize");
minimize.forEach((btn) => {
  btn.addEventListener("click", () => {
    var targetWindow = btn.closest(".desktop-window");
    gsap.to(targetWindow, {
      height: "400px",
      width: "600px",
      duration: 0.5,
      ease: "power5.out",
    });
    navbar.classList.remove("nav-hide");
  });
});
