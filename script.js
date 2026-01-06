
function searchTours(){
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("startDate").value;
  const travelers = document.getElementById("travelers").value;

  if(!destination || !date || !travelers){
    alert("Please select destination, date, and number of travelers.");
    return;
  }

  // Redirect to Tours page with query parameters
  window.location.href = `tours.html?destination=${encodeURIComponent(destination)}&date=${date}&travelers=${travelers}`;
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  if(navMenu.style.display === "flex"){
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
});

const track = document.getElementById("testimonialTrack");
const dotsContainer = document.getElementById("testimonialDots");
const slides = document.querySelectorAll(".testimonial-card");
let index = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.onclick = () => moveSlide(i);
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");
dots[0].classList.add("active");

function moveSlide(i) {
  index = i;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

// Auto slide
setInterval(() => {
  index = (index + 1) % slides.length;
  moveSlide(index);
}, 4500);


// ===== Gallery Slider Auto Slide =====
const galleryTrack = document.querySelector(".gallery-track");
const galleryCards = document.querySelectorAll(".gallery-card");
let galleryIndex = 0;

function moveGallery() {
  galleryIndex++;
  if (galleryIndex >= galleryCards.length) {
    galleryIndex = 0;
  }
  galleryTrack.style.transform = `translateX(-${galleryIndex * (galleryCards[0].offsetWidth + 20)}px)`;
}

setInterval(moveGallery, 3000);

// Optional: Adjust on window resize
window.addEventListener("resize", () => {
  galleryTrack.style.transform = `translateX(-${galleryIndex * (galleryCards[0].offsetWidth + 20)}px)`;
});

