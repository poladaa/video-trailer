"use strict";
const closeBtn = document.querySelector(".close");
const watchBtn = document.querySelector(".btn");
const video = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

watchBtn.addEventListener("click", () => {
  video.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  video.classList.add("active");
  //
  videoEl.pause();
  videoEl.currentTime = 0;
});
