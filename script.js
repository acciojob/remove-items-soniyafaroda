//your JS code here. If required.
// Get references to the dropdown and the button
const select = document.getElementById("colorSelect");
const btn = document.querySelector('input[type="button"]');

// Add click event to the button
btn.addEventListener("click", function () {
    // Get the index of the selected option
    const index = select.selectedIndex;

    // Only remove if something is selected
    if (index !== -1) {
        select.remove(index);
    }
});

