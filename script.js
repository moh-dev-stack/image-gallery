document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxPan = lightbox.querySelector(".lightbox-pan");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const zoomInBtn = lightbox.querySelector(".lightbox-zoom-in");
  const zoomOutBtn = lightbox.querySelector(".lightbox-zoom-out");
  const resetBtn = lightbox.querySelector(".lightbox-reset");
  const fullscreenBtn = lightbox.querySelector(".lightbox-fullscreen");

  let scale = 1;
  let posX = 0;
  let posY = 0;
  let isDragging = false;
  let startX, startY, startPosX, startPosY;

  function applyTransform() {
    lightboxPan.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  }

  function openLightbox(src, alt, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxCaption.textContent = caption;
    scale = 1;
    posX = 0;
    posY = 0;
    applyTransform();
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Gallery item clicks
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const src = item.dataset.src || item.querySelector("img").src;
      const alt = item.dataset.alt || item.querySelector("img").alt;
      const caption = item.querySelector(".caption")?.textContent || alt;
      openLightbox(src, alt, caption);
    });
  });

  // Close
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.getAttribute("aria-hidden") === "false") {
      closeLightbox();
    }
  });

  // Zoom
  zoomInBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    scale = Math.min(scale + 0.5, 5);
    applyTransform();
  });

  zoomOutBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    scale = Math.max(scale - 0.5, 0.5);
    applyTransform();
  });

  resetBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    scale = 1;
    posX = 0;
    posY = 0;
    applyTransform();
  });

  // Pan (drag)
  lightboxPan.addEventListener("mousedown", (e) => {
    if (scale <= 1) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startPosX = posX;
    startPosY = posY;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    posX = startPosX + (e.clientX - startX);
    posY = startPosY + (e.clientY - startY);
    applyTransform();
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch support for zoom/pan on mobile
  lightboxPan.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
    } else if (e.touches.length === 1 && scale > 1) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startPosX = posX;
      startPosY = posY;
    }
  }, { passive: false });

  lightboxPan.addEventListener("touchmove", (e) => {
    if (e.touches.length === 1 && scale > 1) {
      posX = startPosX + (e.touches[0].clientX - startX);
      posY = startPosY + (e.touches[0].clientY - startY);
      applyTransform();
    }
  });

  // Mouse wheel zoom
  lightbox.addEventListener("wheel", (e) => {
    if (lightbox.getAttribute("aria-hidden") === "true") return;
    e.preventDefault();
    if (e.deltaY < 0) {
      scale = Math.min(scale + 0.2, 5);
    } else {
      scale = Math.max(scale - 0.2, 0.5);
    }
    applyTransform();
  }, { passive: false });

  // Fullscreen
  fullscreenBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      lightbox.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });
});
