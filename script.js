/*document.addEventListener("DOMContentLoaded", function () {*/
const menuIcon = document.querySelector('.menu-icon');
const dropdown = document.querySelector('.dropdown');
const progressBar = document.getElementById('myProgressBar');

// Function to toggle the visibility of the dropdown
function toggleDropdown() {
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function updateProgressBar() {                                                                                  // Function to update the progress bar
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;                              // Get the current scroll position
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;           // Get the total height of the page
    var scrolled = (scrollTop / scrollHeight) * 100;                                                            // Calculate the percentage scrolled
    progressBar.style.width = scrolled + "%";                                                                   // Update the width of the progress bar
}

function updateContainerSizes() {
    const leftContainer = document.querySelector(".columnL");
    const rightContainer = document.querySelector(".columnR");

    // Get current dimensions
    const leftRect = leftContainer.getBoundingClientRect();
    const rightRect = rightContainer.getBoundingClientRect();

    // Format as "width x height"
    const leftSizeText = `${Math.round(leftRect.width)}px x ${Math.round(leftRect.height)}px`;
    const rightSizeText = `${Math.round(rightRect.width)}px x ${Math.round(rightRect.height)}px`;

    // Display values inside the containers (or in a separate element)
    document.getElementById("size-display-left").textContent = leftSizeText;
    document.getElementById("size-display-right").textContent = rightSizeText;
}

// Event listener for the menu icon click
menuIcon.addEventListener('click', function (event) {
    toggleDropdown();
    event.stopPropagation(); // Prevent the event from propagating to the document
});

// Event listener for clicking anywhere on the document to close the dropdown
document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target) && event.target !== menuIcon) {
        dropdown.style.display = 'none'; // Close the dropdown if clicked outside
    }
});

window.onscroll = function () {
    console.log('Scroll event triggered'); // Check if this logs
    const progressBar = document.getElementById('myProgressBar');
    if (progressBar) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    } else {
        console.error('Progress bar not found on this page.');
    }
    updateProgressBar();
};

// Run on page load and when the window resizes
window.addEventListener("load", updateContainerSizes);
window.addEventListener("resize", updateContainerSizes);
/*});*/
