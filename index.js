//FADE IN
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -180px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);

    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// // MOBILE NAVBAR
//
// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');
//   const navA = document.querySelectorAll('.nav-links a');
//
//   burger.addEventListener('click', () => {
//     //Toggle nav
//     nav.classList.toggle('nav-active');
//
//     //Animate Links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = '';
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//       }
//     });
//
//     //Burger animation
//     burger.classList.toggle('toggle');
//
//   });
//
//   nav.addEventListener('click', () => {
//
//       nav.classList.toggle('nav-active');
//       burger.classList.toggle('toggle');
//
//   });
//
// }
//
// navSlide();

// NAV BACKGROUND CHANGE
window.onscroll = function() {
  scrollNav()
};

function scrollNav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('nav').className = "nav-alt";
  } else {
    document.querySelector('nav').className = "";
  }
}

// SMOOTHSCROLL

const scroll = new SmoothScroll('nav a[href*="#"]', {
  speed: 600
});

const footerScroll = new SmoothScroll('.footer-nav a[href*="#"]', {
  speed: 600
});


// PORTFOLIO EXPAND
function expand() {
  let card4 = document.querySelector(".card4");
  let card5 = document.querySelector(".card5");
  let card6 = document.querySelector(".card6");
  let expandText = document.querySelector("#expandText");
  let downArrow = document.querySelector(".downArrow");
  let upArrow = document.querySelector(".upArrow");

  if (expandText.innerHTML === "MORE PROJECTS") {
    expandText.innerHTML = "LESS PROJECTS";
    downArrow.classList.add("hidden");
    upArrow.classList.remove("hidden");
    card4.classList.remove("hidden");
    card5.classList.remove("hidden");
    card6.classList.remove("hidden");
  } else {
    expandText.innerHTML = "MORE PROJECTS";
    downArrow.classList.remove("hidden");
    upArrow.classList.add("hidden");
    card4.classList.add("hidden");
    card5.classList.add("hidden");
    card6.classList.add("hidden");
  }
}

document.querySelector(".portfolioExpand").onclick = function() {
  expand();
}
