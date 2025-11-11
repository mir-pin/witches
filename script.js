function openCurtains() {
  const forestContainer = document.getElementById('forestContainer');
  const homepageContent = document.getElementById('homepage-content');

  // Add opening class to trigger animations
  forestContainer.classList.add('opening');
            
  // Fade out forest container
  setTimeout(() => {
    forestContainer.classList.add('hidden');
  }, 1500);
            
  // Show homepage content
  setTimeout(() => {
    homepageContent.classList.add('visible');
  }, 2000);
}