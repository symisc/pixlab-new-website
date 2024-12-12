// Custom scroll reveal effect

const revealElements = document.querySelectorAll("[data-sr='sr-top'], [data-sr='sr-bottom'], [data-sr='sr-left'], [data-sr='sr-right']");
const allSections = document.querySelectorAll("section");

// Check if any section's child has the `data-sr` attribute
allSections?.forEach((section) => {
  if (section.querySelector("[data-sr]")) {
    section.style.overflow = "hidden"; // Apply the hidden style
  }
});

const observerOptions = {
  root: null, // Use the viewport as the root
  threshold: 0.25, // Trigger the callback when 25% of the element is visible
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add 'revealed' class when the element comes into view
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target); // Stop observing once revealed
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);

revealElements?.forEach((element) => {
  observer.observe(element); // Start observing each element
});
