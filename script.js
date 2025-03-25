// JavaScript source code
// JavaScript for interactive navigation menu and settings persistence
document.addEventListener("DOMContentLoaded", function () {
    // Get the menu icon and dropdown list
    const menuIcon = document.querySelector('.menu-icon');
    const dropdown = document.querySelector('.dropdown');
    const progressBar = document.getElementById('myProgressBar');
    const switches = [
        { id: "switch1", container: "container1", color: "red" },
        { id: "switch2", container: "container2", color: "blue" },
        { id: "switch3", container: "container3", color: "green" },

        { id: "switch4", container: "container4", color: "white" },
        { id: "switch5", container: "container5", color: "white" },
        { id: "switch6", container: "container6", color: "white" },

        { id: "switch7", container: "container7", color: "white" },
        { id: "switch8", container: "container8", color: "white" },
        { id: "switch9", container: "container9", color: "white" }
    ];

    // Load settings from localStorage
    switches.forEach(item => {
        const switchElement = document.getElementById(item.id);
        if (switchElement) {
            switchElement.checked = localStorage.getItem(item.id) === "true";
        }
    });

    // Apply settings to containers
    function applySettings() {
        switches.forEach(item => {
            const container = document.getElementById(item.container);
            const isChecked = localStorage.getItem(item.id) === "true";

            if (container) {
                container.style.backgroundColor = isChecked ? item.color : "white";
                container.style.border = isChecked ? "3px solid black" : "1px solid black";
            }
        });
    }

    // If on Home page, apply settings
    if (document.querySelector(".container")) {
        applySettings();
    }

    // Save settings on button click
    const saveButton = document.getElementById("saveButton");
    if (saveButton) {
        saveButton.addEventListener("click", function () {
            switches.forEach(item => {
                const switchElement = document.getElementById(item.id);
                if (switchElement) {
                    localStorage.setItem(item.id, switchElement.checked);
                }
            });
            alert("Settings saved!");
        });
    }

    // Function to toggle the visibility of the dropdown
    function toggleDropdown() {
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
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

    function updateProgressBar() {                                                                                  // Function to update the progress bar
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;                              // Get the current scroll position
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;           // Get the total height of the page
        var scrolled = (scrollTop / scrollHeight) * 100;                                                            // Calculate the percentage scrolled
        progressBar.style.width = scrolled + "%";                                                                   // Update the width of the progress bar
    }

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

    /*updateProgressBar();*/
});
