// boot animation
// const startbtn = document.querySelector(".startbtn");
// const desktop_boot = document.querySelector(".desktop-boot");
// const logo = document.querySelector(".logo");
// const name = document.querySelector(".os-name");
// var tl = gsap.timeline();
// const sound = new Audio("./assest/mac_performa_5200.mp3");
// const play = () => {
//   sound.currentTime = 0;
//   sound.play();
// };

// tl.pause();
// startbtn.addEventListener("click", () => {
//   console.log("click");
//   gsap.to(startbtn, {
//     opacity: 0,
//     duration: 0.7,
//     zIndex: -1,
//   });
//   tl.play();
// });
// tl.to(logo, {
//   delay: 1,
//   duration: 1,
//   opacity: 1,
// });
// tl.add(play, "-=0.5");
// tl.to(name, {
//   opacity: 1,
//   duration: 3,
//   scale: 1,
//   ease: "back.out(1.7)",
// });
// tl.to(desktop_boot, {
//   duration: 0.7,
//   opacity: 0,
//   zIndex: -1,
// });

// opening the tabs
const navbar = document.querySelector(".nav");
const appIcon = document.querySelectorAll(".appIcon");

appIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    const targetId = icon.getAttribute("data-target");
    const targetWindowOpen = document.getElementById(targetId);
    if (targetWindowOpen.style.height === "100%") {
      navbar.classList.add("nav-hide");
    }

    icon.classList.remove("border");
    if (targetWindowOpen) {
      gsap.to(targetWindowOpen, {
        scale: 1,
        duration: 0.5,
        autoAlpha: 1,
        ease: "back.out(1.7)",
      });
    }
    bringToFront(targetWindowOpen);
  });
  const title = icon.querySelector(".title");
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      scale: 1.2,
      duration: 0.3,
      ease: "back.out(2)",
      y: -10,
    });
    title.style.display = "inline";
  });
  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      scale: 1,
      duration: 0.3,
      ease: "back.out(2)",
      y: 0,
    });
    title.style.display = "none";
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
    let smallerWindow = document.querySelector(".smaller-window");
    if (targetWindow.style.height !== "100%") {
      gsap.to(targetWindow, {
        x: 0,
        y: 0,
        height: "100%",
        width: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
      setTimeout(() => {
        navbar.classList.add("nav-hide");
        smallerWindow.classList.add("smaller-window-hide");
      }, 700);
    } else {
      gsap.to(targetWindow, {
        x: 0,
        y: 0,
        height: "400px",
        width: "600px",
        duration: 0.5,
        ease: "power4.inOut",
      });
      smallerWindow.classList.remove("smaller-window-hide");
      navbar.classList.remove("nav-hide");
    }
  });
});
//minimize the tab
const minimize = document.querySelectorAll(".minimize");
minimize.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const targetWindow = btn.closest(".desktop-window");
    gsap.to(targetWindow, {
      duration: 0.5,
      ease: "power2.in",
      autoAlpha: 0,
    });
    const targetId = targetWindow.getAttribute("id");
    appIcon.forEach((icon) => {
      const targetIcon = icon.getAttribute("data-target");
      if (targetIcon == targetId) {
        icon.classList.add("border");
      }
    });
    navbar.classList.remove("nav-hide");
  });
});

const desktop = document.querySelector(".desktop");
const windows = document.querySelectorAll(".desktop-window");
let zIdx = 100;

function bringToFront(win) {
  zIdx++;
  win.style.zIndex = zIdx;
}
windows.forEach((win) => {
  const windows_header = win.querySelector(".window-header");
  Draggable.create(win, {
    type: "x,y",
    trigger: windows_header,
    bounds: desktop,
    edgeResistance: 0.65,
    onPress: function () {
      bringToFront(this.target);
    },
  });
  win.addEventListener("click", () => {
    bringToFront(win);
  });
});

// about tech stack animation

const tl1 = gsap.timeline();
tl1.to(".tech-img", {
  duration: 0.8,
  yoyo: true,
  scale: 1.2,
  stagger: 0.2,
  repeat: -1,
  ease: "power1.inOut",
});

// resume bnt

const resumewindow = document.querySelector(".resume-window");
const resumebtn = document.querySelector(".cv-btn");
const crossbtn = document.querySelector(".cross-resume");
resumebtn.addEventListener("click", () => {
  resumewindow.classList.remove("resume-hide");
});
crossbtn.addEventListener("click", () => {
  resumewindow.classList.add("resume-hide");
});
