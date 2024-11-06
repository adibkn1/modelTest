// Handles loading events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  if (progressBar && updatingBar) {
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
      document.getElementById('tap-overlay').style.display = 'flex'; // Show tap overlay
    } else {
      progressBar.classList.remove('hide');
      document.getElementById('tap-overlay').style.display = 'none'; // Hide tap overlay during loading
    }
  }
};

document.getElementById('ar-viewer').addEventListener('progress', onProgress);

// Launch AR view upon tapping the overlay
document.getElementById('tap-overlay').addEventListener('click', () => {
  const modelViewer = document.getElementById('ar-viewer');
  modelViewer.activateAR();
});
