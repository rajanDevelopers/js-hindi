window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  // Get the scroll position and total scrollable height
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // Calculate the scroll percentage
  let scrollPercentage = (scrollTop / scrollHeight) * 100;

  // Update the width of the progress bar
  document.getElementById("progressBar").style.width = scrollPercentage + "%";
}
