const lightbox = document.querySelector(".lightbox");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const photos = document.querySelectorAll(".photo-grid img");
const lightboxPhoto = document.getElementById("lightbox-photo");
let currentPhoto;

//Display the photo in the lightbox when clicked
photos.forEach((photo, index) => {
  photo.addEventListener("click", (e) => {
    currentPhoto = index;
    lightboxPhoto.src = photo.src;
    lightbox.classList.add("active");
  });
});

//Remove the lightbox is the user clicks outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

leftArrow.addEventListener("click", (e) => {
  currentPhoto === 0
    ? (currentPhoto = photos.length - 1)
    : (currentPhoto = currentPhoto - 1);
  lightboxPhoto.src = photos[currentPhoto].src;
});

rightArrow.addEventListener("click", (e) => {
  currentPhoto === photos.length - 1
    ? (currentPhoto = 0)
    : (currentPhoto = currentPhoto + 1);
  lightboxPhoto.src = photos[currentPhoto].src;
});
