// Handles loading events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  if (progressBar && updatingBar) {
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
      event.target.removeEventListener('progress', onProgress);
    } else {
      progressBar.classList.remove('hide');
    }
  }
};

document.getElementById('ar-viewer').addEventListener('progress', onProgress);

// Launch AR view upon tapping anywhere on the mobile screen
document.getElementById('mobile-view').addEventListener('click', () => {
  const modelViewer = document.getElementById('ar-viewer');
  modelViewer.activateAR();

  // Change the background to blend the GIF with the existing background after a tap
  const mobileView = document.getElementById('mobile-view');
  mobileView.style.background = `
    url('wait.gif') no-repeat center center, 
    url('./4.webp') no-repeat center center
  `;
  mobileView.style.backgroundSize = 'cover, cover';
  mobileView.style.backgroundPosition = 'center, center';
});

